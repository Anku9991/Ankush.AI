import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, company, requirement } = body;

    if (!name || !phone || !requirement) {
      return NextResponse.json({ success: false, message: 'Name, Phone, and Requirement are required.' }, { status: 400 });
    }

    // Check if email is configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Email credentials missing. Please set EMAIL_USER and EMAIL_PASS in Vercel.');
      return NextResponse.json({ success: false, message: 'Server email not configured.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const PIHNEXAMail = {
      from: `"PIHNEXA TECHNOLOGIES" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL || process.env.EMAIL_USER,
      subject: `🔥 NEW ENQUIRY: ${company || 'Individual'} - ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #050a06; color: #e0f2f1; border-radius: 20px; overflow: hidden; border: 1px solid #27ae60;">
          <div style="background: linear-gradient(135deg, #27ae60, #f5c518); padding: 30px; text-align: center;">
            <h1 style="margin: 0; color: #081a0d; font-size: 28px; letter-spacing: 1px;">🚀 New Opportunity</h1>
          </div>
          <div style="padding: 40px;">
            <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; border: 1px solid rgba(39,174,96,0.2);">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; color: #a8d5b5; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Full Name</td>
                  <td style="padding: 12px 0; font-weight: 700; font-size: 16px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #a8d5b5; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Contact</td>
                  <td style="padding: 12px 0; font-weight: 700; font-size: 16px;"><a href="tel:${phone}" style="color: #27ae60; text-decoration: none;">${phone}</a></td>
                </tr>
                ${email ? `
                <tr>
                  <td style="padding: 12px 0; color: #a8d5b5; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                  <td style="padding: 12px 0; font-weight: 700; font-size: 16px;">${email}</td>
                </tr>` : ''}
                ${company ? `
                <tr>
                  <td style="padding: 12px 0; color: #a8d5b5; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Company</td>
                  <td style="padding: 12px 0; font-weight: 700; font-size: 16px;">${company}</td>
                </tr>` : ''}
                <tr>
                  <td style="padding: 12px 0; color: #a8d5b5; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Requirement</td>
                  <td style="padding: 12px 0; line-height: 1.5;">${requirement}</td>
                </tr>
              </table>
            </div>

            <div style="margin-top: 30px; text-align: center;">
              <a href="https://wa.me/${phone.replace(/\D/g, '')}?text=Hi%20${encodeURIComponent(name)},%20this%20is%20Ankush%20from%20PIHNEXA%20TECHNOLOGIES.%20I%20saw%20your%20enquiry%20regarding:%20${encodeURIComponent(requirement.substring(0, 50))}..."
                 style="display: inline-block; background: #25D366; color: #fff; padding: 16px 32px; border-radius: 50px; font-weight: 700; text-decoration: none; box-shadow: 0 4px 15px rgba(37,211,102,0.3);">
                💬 Connect on WhatsApp
              </a>
            </div>
          </div>
          <div style="padding: 20px; text-align: center; font-size: 11px; color: #a8d5b5; border-top: 1px solid rgba(39,174,96,0.1); background: rgba(255,255,255,0.02);">
            Captured at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST • PIHNEXA TECHNOLOGIES Intelligence
          </div>
        </div>
      `
    };

    await transporter.sendMail(PIHNEXAMail);

    // Send auto-reply to client if email is provided
    if (email) {
      const clientMail = {
        from: `"PIHNEXA TECHNOLOGIES" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `✅ We've received your request - PIHNEXA TECHNOLOGIES`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; color: #333;">
            <h2 style="color: #27ae60;">Namaste ${name}! 🙏</h2>
            <p>Thank you for reaching out to <strong>PIHNEXA TECHNOLOGIES</strong>. We've received your inquiry.</p>
            <p>Our team is reviewing your requirements and will contact you on WhatsApp within <strong>2 hours</strong> for a detailed consultation.</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="font-size: 14px; color: #666;">Need immediate help? WhatsApp us directly: <a href="https://wa.me/917992203671" style="color: #27ae60;">+91 7992203671</a></p>
          </div>
        `
      };
      await transporter.sendMail(clientMail).catch(err => console.error("Auto-reply failed", err));
    }

    return NextResponse.json({ success: true, message: 'Enquiry submitted successfully!' }, { status: 200 });
  } catch (error: any) {
    console.error('Email API Error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
