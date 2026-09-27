"use client";

import { useState } from "react";

const contactBadges = [
  {
    icon: "/contact-1.svg",
    label1: "الموقع الرئيسي",
    label2: "الرياض، المملكة العربية السعودية",
  },
  {
    icon: "/contact-2.svg",
    label1: "البريد الإلكتروني",
    label2: "support@kowa.sa",
  },
  {
    icon: "/contact-3.svg",
    label1: "الرقم الموحد",
    label2: "920000123",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "استفسار عام",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: '' }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // Client-side Validation
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setStatus({
        type: "error",
        message: "يرجى كتابة الاسم الكامل (حرفين على الأقل).",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus({
        type: "error",
        message: "يرجى إدخال بريد إلكتروني صحيح.",
      });
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setStatus({
        type: "error",
        message: "يرجى إدخال رقم جوال صحيح (8 أرقام على الأقل).",
      });
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setStatus({
        type: "error",
        message: "يرجى كتابة رسالة توضيحية (5 حروف على الأقل).",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "حدث خطأ أثناء الإرسال");
      }

      setStatus({
        type: "success",
        message: data.message || "تم إرسال رسالتك بنجاح! سيتواصل معك فريقنا قريباً.",
      });

      // Clear Form on Success
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        subject: "استفسار عام",
        message: "",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: err.message || "فشل الاتصال بالخادم، يرجى المحاولة مرة أخرى.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-[95px] px-4 sm:px-8 lg:px-[120px]"
      style={{
        background: `
          linear-gradient(3.23deg, #0C0828 2.67%, rgba(12, 8, 40, 0) 66.94%),
          linear-gradient(226.55deg, #FFFFFF 6.62%, rgba(255, 255, 255, 0) 33.31%),
          linear-gradient(0deg, #F8F7FD 41.92%, #EBEAF8 100%)
        `,
      }}
    >
      <div className="w-full max-w-[1920px] mx-auto flex flex-col items-center">
        
        {/* 1. Main Title */}
        <h2 className="text-[32px] sm:text-[36px] font-bold text-[#06031C] leading-[1.3] text-center tracking-tight">
          فريقنا في خدمتك دائماً
        </h2>

        {/* 2. Sub-description (5px under title) */}
        <p className="text-[15px] sm:text-[16px] font-semibold text-[#475569] leading-[1.7] text-center mt-[5px] max-w-2xl">
          نسعد بالإجابة عن استفساراتك واستقبال مقترحاتك لتقديم تجربة تنقل استثنائية تفوق توقعاتك.
        </p>

        {/* 3. Form Card Container (40px under description) */}
        <div className="w-full max-w-5xl mt-[40px] bg-white border border-[#F1F5F9] rounded-[24px] px-[32px] py-[64px] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (col-7 in grid): Form Inputs & Submit Button */}
            <div className="lg:col-span-7 order-1 lg:order-2 w-full">
              <form onSubmit={handleSubmit} className="space-y-[16px] w-full">
                
                {/* Status Feedback Banner */}
                {status && (
                  <div
                    className={`p-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      status.type === "success"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-rose-50 text-rose-800 border border-rose-200"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Full Name Input */}
                <div className="flex flex-col text-right">
                  <label className="text-[16px] font-normal text-[#0F172A] mb-1.5">
                    الاسم الكامل <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="أدخل اسمك الكريم"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full border border-[#E1E3E4] rounded-[8px] p-[10px] px-3 text-[14px] text-[#475569] placeholder:text-[#94A3B8] text-right outline-none transition-colors focus:border-[#1F0F8C]"
                  />
                </div>

                {/* 2-Column Inputs: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  
                  {/* Phone Input */}
                  <div className="flex flex-col text-right">
                    <label className="text-[16px] font-normal text-[#0F172A] mb-1.5">
                      رقم الجوال الفعال <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="05xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full border border-[#E1E3E4] rounded-[8px] p-[10px] px-3 text-[14px] text-[#475569] placeholder:text-[#94A3B8] text-right outline-none transition-colors focus:border-[#1F0F8C]"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col text-right">
                    <label className="text-[16px] font-normal text-[#0F172A] mb-1.5">
                      البريد الإلكتروني المعتمد <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-[#E1E3E4] rounded-[8px] p-[10px] px-3 text-[14px] text-[#475569] placeholder:text-[#94A3B8] text-right outline-none transition-colors focus:border-[#1F0F8C]"
                    />
                  </div>

                </div>

                {/* Subject Selector */}
                <div className="flex flex-col text-right">
                  <label className="text-[16px] font-normal text-[#0F172A] mb-1.5">
                    نوع الاستفسار / الموضوع
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full border border-[#E1E3E4] rounded-[8px] p-[10px] px-3 text-[14px] text-[#475569] bg-white text-right outline-none transition-colors focus:border-[#1F0F8C]"
                  >
                    <option value="استفسار عام">استفسار عام</option>
                    <option value="انضمام ككابتن">الانضمام ككابتن معتمد</option>
                    <option value="خدمات الأعمال والشركات">خدمات الأعمال والشركات</option>
                    <option value="الدعم الفني والملاحظات">الدعم الفني والملاحظات</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="flex flex-col text-right">
                  <label className="text-[16px] font-normal text-[#0F172A] mb-1.5">
                    اكتب رسالتك أو استفسارك هنا بالتفصيل <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="كيف نقدر نساعدك؟ اكتب استفسارك بوضوح..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full border border-[#E1E3E4] rounded-[8px] p-[10px] px-3 text-[14px] text-[#475569] placeholder:text-[#94A3B8] text-right outline-none transition-colors focus:border-[#1F0F8C] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1F0F8C] hover:bg-[#190B74] disabled:opacity-60 disabled:cursor-not-allowed rounded-[14px] px-[32px] py-[16px] inline-flex items-center justify-center gap-[8px] transition-all duration-300 hover:shadow-lg active:scale-[0.99] group"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span className="text-[14px] font-normal text-white">
                          جاري الإرسال ...
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-[14px] font-normal text-white">
                          إرسال الرسالة إلى فريق الدعم
                        </span>
                        <img
                          src="/contact-send.svg"
                          alt="إرسال"
                          className="w-5 h-5 object-contain transition-transform duration-300 group-hover:translate-x-[-2px]"
                        />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>

            {/* Right Column (col-5 in grid): 3 Contact Badges */}
            <div className="lg:col-span-5 order-2 lg:order-1 w-full space-y-[16px]">
              {contactBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F7FD] border border-[#E5E2F6] rounded-[16px] p-[16px] flex items-center gap-[16px] transition-all duration-300 hover:border-[#1F0F8C]/30"
                >
                  {/* Icon Box */}
                  <div
                    className="w-[44px] h-[44px] min-w-[44px] bg-white rounded-[12px] flex items-center justify-center"
                    style={{
                      boxShadow: "0px 1px 2px 0px #0000000D",
                    }}
                  >
                    <img
                      src={badge.icon}
                      alt={badge.label1}
                      className="w-[20px] h-[20px] object-contain"
                    />
                  </div>

                  {/* Labels Container (Stacked with 2.5px gap) */}
                  <div className="flex flex-col gap-[2.5px] text-right">
                    <span className="text-[12px] font-medium text-[#475569]">
                      {badge.label1}
                    </span>
                    <span className="text-[16px] font-medium text-[#475569]">
                      {badge.label2}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
