import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, MessageCircle, Phone } from "lucide-react";

const title = "CCTV Installation in Malappuram";
const description = "CCTV & Security Systems in Malappuram by Tygrom Integrated Solutions, Randathani. Discuss equipment selection, installation and your project requirements.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cctv-security" },
  openGraph: {
    type: "website", title, description,
    url: "https://www.tygrom.in/cctv-security",
    images: [{ url: "/cctv-security.png", alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/cctv-security.png"] },
};

const features = [
  {
    "title": "Camera Placement",
    "description": "Assess entrances, boundaries and key areas to select suitable camera locations and viewing angles."
  },
  {
    "title": "Camera Selection",
    "description": "Choose suitable camera types and resolution according to distance, lighting, weather exposure and required detail."
  },
  {
    "title": "Video Recording",
    "description": "Plan compatible DVR or NVR equipment and storage around camera count, recording settings and retention needs."
  },
  {
    "title": "Remote Viewing",
    "description": "Configure supported mobile viewing with appropriate account access and internet connectivity."
  },
  {
    "title": "Night-Time Coverage",
    "description": "Assess available lighting and camera capabilities for the areas you need to monitor after dark."
  },
  {
    "title": "Existing System Assessment",
    "description": "Check camera, recorder and cable compatibility before recommending additions or replacements."
  }
];
const faqs = [
  {
    "question": "How many CCTV cameras do I need?",
    "answer": "Camera count depends on your layout and the areas you want to cover. A site assessment helps identify viewing angles and blind spots."
  },
  {
    "question": "How long are recordings stored?",
    "answer": "Retention depends on drive capacity, camera count, resolution, frame rate and recording mode. We can size storage around your target retention period."
  },
  {
    "question": "Can I view cameras on my phone?",
    "answer": "Supported systems can provide mobile viewing after setup. Remote viewing normally requires suitable internet connectivity and secure account access."
  },
  {
    "question": "Does CCTV work without internet?",
    "answer": "Many systems can record locally without internet when the cameras and recorder have power. Remote access and cloud features depend on connectivity."
  },
  {
    "question": "Can you add cameras to my current system?",
    "answer": "This depends on available recorder channels, supported camera standards, cabling and power. Share the existing model details for an assessment."
  }
];
const whatsappUrl = "https://wa.me/919946949924?text=" + encodeURIComponent("Hello Tygrom, I would like to enquire about CCTV & Security Systems. My site location is: ");

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
          <Link href="/" aria-label="Tygrom Integrated Solutions homepage" className="inline-flex items-center">
            <img src="/Logo.jpeg" alt="Tygrom Integrated Solutions" className="block h-auto w-[180px] object-contain sm:w-[220px]" />
          </Link>
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0A192F]">
            <ArrowLeft size={18} aria-hidden="true" /> All Services
          </Link>
        </div>
      </header>
      <main>
        <section className="bg-[#0A192F] px-5 py-16 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold tracking-wide text-sky-300">Randathani · Malappuram · Kerala</p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
              <p className="mt-6 text-lg leading-8 text-slate-200">Choose CCTV coverage around the entrances, movement areas and recording needs of your home or business. Tygrom Integrated Solutions, Randathani, plans camera placement, recording and supported remote viewing around your property in Malappuram.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400">
                  <MessageCircle size={20} aria-hidden="true" /> Discuss Your Project
                </a>
                <a href="tel:+919946949924" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-500 px-6 py-3 font-semibold hover:bg-white/10">
                  <Phone size={19} aria-hidden="true" /> Call Tygrom
                </a>
              </div>
            </div>
            <img src="/cctv-security.png" alt="CCTV & Security Systems by Tygrom Integrated Solutions" className="h-auto w-full rounded-2xl bg-[#070e18] object-contain" />
          </div>
        </section>
        <section className="px-5 py-16" aria-labelledby="solutions-heading">
          <div className="mx-auto max-w-6xl">
            <h2 id="solutions-heading" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">CCTV &amp; Security Systems Options</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">Equipment and features are selected after assessing your site. Your quotation will specify the installation scope, compatible functions and any required accessories.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <CheckCircle2 size={24} className="mb-4 text-sky-700" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-[#0A192F]">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white px-5 py-16" aria-labelledby="planning-heading">
          <div className="mx-auto max-w-6xl">
            <h2 id="planning-heading" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">Plan Your Installation</h2>
            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              <li className="rounded-2xl bg-slate-50 p-6"><h3 className="font-semibold text-[#0A192F]">1. Share Your Requirements</h3><p className="mt-3 leading-7 text-slate-600">Share site photographs or a plan, the areas to monitor, existing equipment and your recording-retention target.</p></li>
              <li className="rounded-2xl bg-slate-50 p-6"><h3 className="font-semibold text-[#0A192F]">2. Review the Proposed Scope</h3><p className="mt-3 leading-7 text-slate-600">Discuss site conditions, compatible equipment, installation work and the quotation before proceeding.</p></li>
              <li className="rounded-2xl bg-slate-50 p-6"><h3 className="font-semibold text-[#0A192F]">3. Installation and Handover</h3><p className="mt-3 leading-7 text-slate-600">The agreed equipment is installed and configured, with operating guidance and support arrangements explained at handover.</p></li>
            </ol>
          </div>
        </section>
        <section className="px-5 py-16" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-4xl">
            <h2 id="faq-heading" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-5">
                  <summary className="cursor-pointer font-semibold text-[#0A192F]">{faq.question}</summary>
                  <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#0A192F] px-5 py-12 text-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold">Discuss Your Project with Tygrom</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-200">Based in Randathani, Malappuram. Share your site location and requirements so we can discuss the appropriate scope and installation availability.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400"><MessageCircle size={20} aria-hidden="true" /> Enquire on WhatsApp</a>
            <p className="mt-8 text-sm font-semibold text-sky-300">Related Services</p>
            <div className="mt-3 flex flex-wrap gap-5"><Link href="/access-control-gate-automation" className="inline-flex items-center gap-1 text-sm underline underline-offset-4 hover:text-sky-300">Access Control &amp; Gate Automation<ChevronRight size={16} aria-hidden="true" /></Link>
<Link href="/networking-wifi" className="inline-flex items-center gap-1 text-sm underline underline-offset-4 hover:text-sky-300">Networking &amp; WiFi Solutions<ChevronRight size={16} aria-hidden="true" /></Link></div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div><p className="font-semibold text-[#0A192F]">Tygrom Integrated Solutions</p><p className="mt-1 text-sm text-slate-600">Randathani, Malappuram, Kerala</p></div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0A192F]"><ArrowLeft size={18} aria-hidden="true" /> Return to Homepage</Link>
        </div>
      </footer>
    </div>
  );
}
