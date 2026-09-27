import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    // Server-side input validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "يرجى إدخال اسم صحيح لا يقل عن حرفين" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "يرجى إدخال البريد الإلكتروني بالشكل الصحيح" },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json(
        { error: "يرجى إدخال رقم هاتف صحيح لا يقل عن 8 أرقام" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "يرجى كتابة نص الرسالة (5 حروف على الأقل)" },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone.trim();
    const cleanSubject = subject ? subject.trim() : "استفسار عام";
    const cleanMessage = message.trim();

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "منصة كوا للتنقل الذكي <onboarding@resend.dev>",
      to: ["support@kowa.sa"],
      replyTo: cleanEmail,
      subject: `[رسالة جديدة من الموقع] - ${cleanSubject} (${cleanName})`,
      text: `اسم ارسل الرسالة: ${cleanName}\nالبريد: ${cleanEmail}\nالجوال: ${cleanPhone}\nالموضوع: ${cleanSubject}\nالرسالة:\n${cleanMessage}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; background-color: #f8f7fd; padding: 30px; color: #0c0828;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; padding: 24px; border: 1px solid #e5e2f6; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            
            <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #190b74;">
              <h2 style="color: #190b74; margin: 0; font-size: 22px;">طلب تواصل جديد من الموقع الإلكتروني</h2>
              <p style="color: #64748b; font-size: 14px; margin-top: 6px;">منصة كوا للتنقل الذكي الفاخر</p>
            </div>

            <div style="margin-y: 20px; padding: 16px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; font-weight: bold; color: #1f0f8c; width: 30%;">الاسم الكامل:</td>
                  <td style="padding: 10px; color: #0f172a;">${cleanName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; color: #1f0f8c;">البريد الإلكتروني:</td>
                  <td style="padding: 10px; color: #0f172a;">
                    <a href="mailto:${cleanEmail}" style="color: #190b74; text-decoration: none;">${cleanEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; color: #1f0f8c;">رقم الجوال:</td>
                  <td style="padding: 10px; color: #0f172a; direction: ltr; text-align: right;">${cleanPhone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; color: #1f0f8c;">موضوع الاستفسار:</td>
                  <td style="padding: 10px; color: #0f172a;">${cleanSubject}</td>
                </tr>
              </table>
            </div>

            <div style="background-color: #f1f5f9; border-radius: 12px; padding: 16px; margin-top: 16px;">
              <h4 style="margin: 0 0 10px 0; color: #475569;">نص الرسالة:</h4>
              <p style="margin: 0; color: #0f172a; line-height: 1.6; white-space: pre-wrap;">${cleanMessage}</p>
            </div>

            <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 16px;">
              تم إرسال هذه الرسالة تلقائياً عبر نموذج التواصل بموقع كوا (kowa.sa)
            </div>

          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error details:", error);
      return NextResponse.json(
        { error: error.message || "حدث خطأ أثناء إرسال البريد الإلكتروني" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, data, message: "تم إرسال رسالتك بنجاح! سيتواصل معك فريقنا في أقرب وقت." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact Form Server Error:", error);
    return NextResponse.json(
      { error: error.message || "حدث خطأ غير متوقع في الخادم، يرجى المحاولة لاحقاً." },
      { status: 500 }
    );
  }
}
