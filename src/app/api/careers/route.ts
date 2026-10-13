import { createHash } from "node:crypto";

export const runtime = "nodejs";
export const maxDuration = 30;

const MAX_FILES = 3;
const MAX_FILES_BYTES = 3 * 1024 * 1024;
const MAX_BODY_BYTES = MAX_FILES_BYTES + 128 * 1024;
const attempts = new Map<string, { count: number; expires: number }>();
const positions = new Set(["Field Technician / Installer", "ELV Systems Engineer", "Smart Automation Specialist", "Project Manager"]);

function fail(error: string, status = 400) {
  return Response.json({ error }, { status });
}

function checkRate(request: Request) {
  // Best-effort per-instance protection. Also enable Vercel Firewall rate limits.
  const address = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const key = createHash("sha256").update(address).digest("hex");
  const now = Date.now();
  for (const [id, value] of attempts) if (value.expires <= now) attempts.delete(id);
  const current = attempts.get(key);
  if (current && current.count >= 5) return false;
  if (current) current.count++;
  else {
    if (attempts.size >= 5000) return false;
    attempts.set(key, { count: 1, expires: now + 10 * 60 * 1000 });
  }
  return true;
}

export async function POST(request: Request) {
  const allowed = new Set(["https://www.tygrom.in", "https://tygrom.in"]);
  if (process.env.CAREERS_SITE_ORIGIN) allowed.add(process.env.CAREERS_SITE_ORIGIN);
  if (process.env.NODE_ENV !== "production") {
    allowed.add("http://localhost:3000");
    allowed.add("http://127.0.0.1:3000");
  }
  if (!allowed.has(request.headers.get("origin") || "")) return fail("This request is not allowed.", 403);
  if (!request.headers.get("content-type")?.startsWith("multipart/form-data")) return fail("Please use the application form.");
  if (!checkRate(request)) return fail("Too many attempts. Please wait 10 minutes before trying again.", 429);
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_BODY_BYTES) return fail("Documents must total 3 MB or less.", 413);

  let data: FormData;
  try {
    // Bound the stream even when Content-Length is absent or inaccurate.
    const reader = request.body?.getReader();
    if (!reader) return fail("The application is empty.");
    const chunks: Uint8Array[] = [];
    let length = 0;
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      length += chunk.value.byteLength;
      if (length > MAX_BODY_BYTES) {
        await reader.cancel();
        return fail("Documents must total 3 MB or less.", 413);
      }
      chunks.push(chunk.value);
    }
    const bytes = Buffer.concat(chunks);
    data = await new Response(bytes, { headers: { "Content-Type": request.headers.get("content-type")! } }).formData();
  } catch {
    return fail("Unable to read the application. Please try again.");
  }
  if (String(data.get("company") || "").trim()) return fail("Unable to submit this application.");
  const value = (name: string) => typeof data.get(name) === "string" ? String(data.get(name)).trim() : "";
  const path = value("careerPath");
  const fullName = value("fullName");
  const email = value("email");
  const phone = value("phone");
  const id = value("submissionId");
  if (path !== "fresher" && path !== "experienced") return fail("Choose an application type.");
  if (!fullName || fullName.length > 100 || /[\r\n]/.test(fullName)) return fail("Enter a valid full name.");
  if (email.length > 150 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail("Enter a valid email address.");
  if (!/^[+\d\s().-]{7,25}$/.test(phone) || phone.replace(/\D/g, "").length < 7) return fail("Enter a valid phone number.");
  if (!/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(id)) return fail("Please refresh the page and try again.");
  const details = value(path === "fresher" ? "personalityGoal" : "technicalStrengths");
  if (!details || details.length > 2000) return fail("Enter your application details (up to 2,000 characters).");
  const education = value("education");
  const position = value("position");
  const yearsText = value("yearsOfExp");
  const years = Number(yearsText);
  if (path === "fresher" && (!education || education.length > 200)) return fail("Enter your education qualification.");
  if (path === "experienced" && (!positions.has(position) || !yearsText || !Number.isFinite(years) || years < 0 || years > 60 || !Number.isInteger(years * 2))) return fail("Choose a valid position and years of experience.");

  const documents = data.getAll("documents");
  if (documents.some((item) => !(item instanceof File))) return fail("Invalid document upload.");
  const files = documents.filter((item): item is File => item instanceof File && item.size > 0);
  if (files.length > MAX_FILES || files.reduce((sum, file) => sum + file.size, 0) > MAX_FILES_BYTES) return fail("Upload up to 3 files, with a combined size of 3 MB or less.");
  const attachments: { filename: string; content: string; content_type: string }[] = [];
  for (const file of files) {
    const extension = file.name.toLowerCase().split(".").pop();
    const bytes = Buffer.from(await file.arrayBuffer());
    let contentType = "";
    if (extension === "pdf" && bytes.subarray(0, 5).toString() === "%PDF-") contentType = "application/pdf";
    if ((extension === "jpg" || extension === "jpeg") && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) contentType = "image/jpeg";
    if (extension === "png" && bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) contentType = "image/png";
    if (extension === "docx" && bytes[0] === 0x50 && bytes[1] === 0x4b && bytes.includes(Buffer.from("word/document.xml"))) contentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    if (!contentType) return fail("One document is not a valid PDF, DOCX, JPG or PNG file.");
    const filename = file.name.replace(/[^a-zA-Z0-9._ -]/g, "_").slice(-120);
    attachments.push({ filename, content: bytes.toString("base64"), content_type: contentType });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CAREERS_EMAIL_FROM;
  if (!apiKey || !from) return fail("Applications are temporarily unavailable. Please email info@tygrom.in.", 503);
  const title = path === "experienced" ? "Experienced Career Application" : "Fresher Career Application";
  const text = [title, "", `Full name: ${fullName}`, `Email: ${email}`, `Phone / WhatsApp: ${phone}`,
    ...(path === "experienced" ? [`Position: ${position}`, `Years of experience: ${years}`, `Technical strengths and projects:\n${details}`] : [`Education: ${education}`, `Personality and career goals:\n${details}`]),
    "", `Documents attached: ${attachments.length}`, `Application reference: ${id}`].join("\n");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": `careers/${id}` },
      body: JSON.stringify({ from, to: ["info@tygrom.in"], reply_to: email, subject: `${title} - ${fullName}`, text, attachments }),
      signal: AbortSignal.timeout(20000),
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || !result?.id) {
      // Never log applicant details, attachments or API secrets.
      console.error("Career email provider rejected request", response.status);
      return fail("Unable to submit right now. Please try again or email info@tygrom.in.", 502);
    }
    return Response.json({ success: true });
  } catch {
    return fail("We could not confirm submission. Please retry without editing the form, or email info@tygrom.in.", 502);
  }
}
