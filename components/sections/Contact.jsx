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
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit
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
                
                {/* Full Name Input */}
                <div className="flex flex-col text-right">
                  <label className="text-[16px] font-normal text-[#0F172A] mb-1.5">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك الكريم"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full border border-[#E1E3E4] rounded-[8px] p-[8px] px-3 text-[14px] text-[#475569] placeholder:text-[#94A3B8] text-right outline-none transition-colors focus:border-[#1F0F8C]"
                  />
                </div>

                {/* 2-Column Inputs: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  
                  {/* Phone Input */}
                  <div className="flex flex-col text-right">
                    <label className="text-[16px] font-normal text-[#0F172A] mb-1.5">
                      رقم الجوال الفعال
                    </label>
                    <input
                      type="tel"
                      placeholder="05xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full border border-[#E1E3E4] rounded-[8px] p-[8px] px-3 text-[14px] text-[#475569] placeholder:text-[#94A3B8] text-right outline-none transition-colors focus:border-[#1F0F8C]"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col text-right">
                    <label className="text-[16px] font-normal text-[#0F172A] mb-1.5">
                      البريد الإلكتروني المعتمد
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-[#E1E3E4] rounded-[8px] p-[8px] px-3 text-[14px] text-[#475569] placeholder:text-[#94A3B8] text-right outline-none transition-colors focus:border-[#1F0F8C]"
                    />
                  </div>

                </div>

                {/* Message Input */}
                <div className="flex flex-col text-right">
                  <label className="text-[16px] font-normal text-[#0F172A] mb-1.5">
                    اكتب رسالتك أو استفسارك هنا بالتفصيل ...
                  </label>
                  <input
                    type="text"
                    placeholder="كيف نقدر نساعدك؟"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full border border-[#E1E3E4] rounded-[8px] p-[8px] px-3 text-[14px] text-[#475569] placeholder:text-[#94A3B8] text-right outline-none transition-colors focus:border-[#1F0F8C]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#1F0F8C] hover:bg-[#190B74] rounded-[14px] px-[32px] py-[16px] inline-flex items-center justify-center gap-[8px] transition-all duration-300 hover:shadow-lg active:scale-[0.99] group"
                  >
                    <span className="text-[14px] font-normal text-white">
                      إرسال الرسالة إلى فريق الدعم
                    </span>
                    <img
                      src="/contact-send.svg"
                      alt="إرسال"
                      className="w-5 h-5 object-contain transition-transform duration-300 group-hover:translate-x-[-2px]"
                    />
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
