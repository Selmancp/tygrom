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

    // Configure Zoho SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtppro.zoho.in',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send Email
    await transporter.sendMail({
      from: `"Tygrom Careers" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
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