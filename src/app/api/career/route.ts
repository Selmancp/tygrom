import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const applicantType = formData.get('applicantType') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const education = (formData.get('education') as string) || 'N/A';
    const personalityGoal = (formData.get('personalityGoal') as string) || 'N/A';
    const position = (formData.get('position') as string) || 'N/A';
    const yearsOfExp = (formData.get('yearsOfExp') as string) || 'N/A';
    const technicalStrengths = (formData.get('technicalStrengths') as string) || 'N/A';

    const resumeFile = formData.get('resume') as File | null;

    const attachments = [];
    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
      });
    }

    const emailHtml = `
      <h2>New Career Application (${applicantType.toUpperCase()})</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>${
        applicantType === 'fresher'
          ? `<p><strong>Education:</strong> ${education}</p>
             <p><strong>Personality / Goals:</strong> ${personalityGoal}</p>`
          : `<p><strong>Position:</strong> ${position}</p>
             <p><strong>Years of Experience:</strong> ${yearsOfExp}</p>
             <p><strong>Technical Strengths:</strong> ${technicalStrengths}</p>`
      }
    `;

    const smtpUser = process.env.ZOHO_USER || process.env.SMTP_USER || process.env.ZOHO_EMAIL || 'career@tygrom.in';
    const smtpPass = process.env.ZOHO_APP_PASSWORD || process.env.SMTP_PASS || process.env.ZOHO_PASSWORD || 'qDtC3PH7fk7N';

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in',
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Tygrom Careers" <${smtpUser}>`,
      to: smtpUser,
      subject: `New Application: ${name} (${applicantType})`,
      html: emailHtml,
      attachments: attachments,
    });

    return NextResponse.json({ success: true, message: 'Application submitted successfully' });
  } catch (error: any) {
    console.error('Zoho SMTP Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit application' },
      { status: 500 }
    );
  }
}