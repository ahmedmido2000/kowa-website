"use client";

import { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "كيف أطلب رحلتي الأولى مع كوا بكل سهولة؟",
    answer:
      "كل اللي عليك فتح التطبيق، وتحديد وجهتك على الخريطة، واختيار فئة السيارة المناسبة لك، ثم النقر على \"تأكيد الطلب\". سيتولى أقرب كابتن قبول الرحلة فوراً.",
  },
  {
    id: 2,
    question: "هل أسعار الرحلات ثابتة ومضمونة قبل تأكيد الحجز؟",
    answer:
      "نعم، تضمن لك منصة كوا تسعيرة محددة ومحسوبة مسبقاً بدقة بدون أي زيادة أو رسوم خفية أثناء الرحلة.",
  },
  {
    id: 3,
    question: "ما هي شروط ومزايا الانضمام ككابتن معتمد لدى كوا؟",
    answer:
      "يتطلب الانضمام وجود رخصة قيادة سارية ورخصة سير للمركبة، وتتيح لك المنصة أرباحاً يومية وحرية كاملة في تحديد ساعات العمل.",
  },
  {
    id: 4,
    question: "كيف نضمن أعلى مستويات الأمان والخصوصية لك ولعائلتك؟",
    answer:
      "تتبع فوري ومباشر لجميع الرحلات 24/7، فحص شامل للمركبات، وإمكانية مشاركة تفاصيل الرحلة الحية مع عائلتك بكل طمأنينة.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative w-full py-[95px] pr-4 sm:pr-8 lg:pr-[120px] pl-4 sm:pl-8 lg:pl-[20px]"
      style={{
        background: "linear-gradient(90deg, #ECEAFF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[6.5fr_5.5fr] gap-8 lg:gap-0 items-center">
          
          {/* Right Side (Part 1): Header Text & FAQ Cards Accordion */}
          <div className="flex flex-col items-start text-right order-1 lg:order-1 w-full">
            
            {/* Title */}
            <h2 className="text-[32px] sm:text-[36px] font-bold text-[#0F172A] leading-[1.3] tracking-tight mb-1.5">
              إجابات واضحة لجميع استفساراتك
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] font-semibold text-[#475569] leading-[1.6] max-w-xl mb-4">
              كل ما تحتاج لمعرفته عن خدمات كوا، معايير الأمان، وضمانات الجودة.
            </p>

            {/* FAQ Cards List */}
            <div className="w-full space-y-[16px]">
              {faqItems.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-[#F8F7FD] border border-[#E5E2F6] rounded-[16px] p-[20px] transition-all duration-300 hover:border-[#1F0F8C]/30"
                  >
                    {/* Card Header / Question Toggle Button (Title on right, +/- sign centered inside circle on left) */}
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      className="w-full flex items-center justify-between gap-4 text-right focus:outline-none group"
                    >
                      {/* Question Title (Right side in RTL) */}
                      <h3 className="text-[16px] font-semibold text-[#0F172A] flex-1 text-right">
                        {item.question}
                      </h3>

                      {/* Plus / Minus Circle Icon Container (Left side in RTL, centered icon) */}
                      <div
                        className="w-[32px] h-[32px] min-w-[32px] rounded-full bg-white flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                        style={{
                          boxShadow: "0px 1px 2px 0px #0000000D",
                        }}
                      >
                        <span className="text-[20px] font-bold text-[#1F0F8C] leading-none flex items-center justify-center text-center pb-[2px] select-none">
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                    </button>

                    {/* Card Body / Answer Paragraph (when open) */}
                    {isOpen && (
                      <div className="pt-3 animate-fadeIn">
                        <p className="text-[15px] sm:text-[16px] font-normal text-black leading-[1.7]">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Left Side (Part 2): Phone Mockup Image */}
          <div className="flex justify-center items-center order-2 lg:order-2 w-full">
            <div className="relative w-full max-w-[440px] lg:max-w-[480px]">
              <img
                src="/faq-phone.png"
                alt="تطبيق كوا - الأسئلة الشائعة"
                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
