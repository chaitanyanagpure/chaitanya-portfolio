import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Server-side validation
    if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Process submission: Send via Nodemailer SMTP if credentials exist
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const to = process.env.EMAIL_TO || "chaitanyanagpure64791@gmail.com";

    // Handle development/missing credentials fallback
    if (!user || !pass || pass === "your-gmail-app-password") {
      console.warn("SMTP credentials not configured in environment variables. Email was not sent.");
      console.log("Contact Form Submission Received in Dev Log:");
      console.log("-------------------------------------------");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Company: ${company || "Not provided"}`);
      console.log(`Message: ${message}`);
      console.log("-------------------------------------------");

      return NextResponse.json(
        { 
          success: true, 
          message: "Message processed in dev mode. Set SMTP credentials to enable live emails." 
        },
        { status: 200 }
      );
    }

    // Configure SMTP transporter using Gmail service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: user,
        pass: pass
      }
    });

    const mailOptions = {
      from: `"${name}" <${user}>`, // Must send from the authenticated address to prevent server block
      replyTo: email,              // Set reply-to to allow direct replies to the sender
      to: to,
      subject: `New Portfolio Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; rounded: 8px;">
          <h2 style="color: #6d28d9; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
          <p style="margin: 15px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 15px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 15px 0;"><strong>Company:</strong> ${company || "Not provided"}</p>
          <div style="background-color: #f9fafb; border-left: 4px solid #6d28d9; padding: 15px; margin-top: 20px; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #4b5563;">Message:</p>
            <p style="margin: 10px 0 0 0; white-space: pre-wrap; color: #1f2937; line-height: 1.5;">${message}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json(
      { error: "Failed to transmit message. Internal Server Error." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { status: "API endpoint active" },
    { status: 200 }
  );
}
