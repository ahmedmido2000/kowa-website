"use client";

import AnalyticsBar from "./AnalyticsBar";

const passengerFeatures = [
  {
    icon: "/pass-1.svg",
    title: "أسطول فاخر ومتنوع",
    description: "سيارات حديثة ومجهزة تلبي كافة تطلعاتك الشخصية والتنفيذية.",
  },
  {
    icon: "/pass-2.svg",
    title: "شفافية تسعير مطلقة",
    description: "تسعيرة محددة وعادلة معتمدة مسبقاً بدون أي رسوم خفية أو مفاجآت.",
  },
  {
    icon: "/pass-3.svg",
    title: "تتبع مباشر ولحظي",
    description: "خرائط ملاحية متقدمة ومشاركة مسار الرحلة الحية مع عائلتك بكل طمأنينة.",
  },
  {
    icon: "/pass-4.svg",
    title: "أعلى معايير الأمان",
    description: "فحص دقيق للمركبات، كباتن معتمدون رسمياً، ومراقبة أمنية مستمرة 24/7.",
  },
];

export default function Passengers() {
  return (
    <section
      id="passengers"
      className="relative w-full py-[95px] px-4 sm:px-8 lg:px-[120px]"
      style={{
        background: `
          linear-gradient(180deg, #0E0724 7.2%, rgba(14, 7, 36, 0) 58.08%),
          linear-gradient(357.51deg, #190B74 4.95%, rgba(25, 11, 116, 0) 65.11%),
          linear-gradient(2.63deg, #FFFFFF 2.2%, #E2E1F3 139.29%)
        `,
      }}
    >
      <div className="w-full max-w-[1920px] mx-auto">
        {/* Analytics / Stats Bar (Mobile Only: below md) */}
        <div className="block md:hidden pb-12 w-full">
          <AnalyticsBar />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Right Side: Passenger Image with Driver Badge */}
          <div className="relative w-full">
            <div
              className="relative w-full overflow-hidden border-4 border-white rounded-[40px]"
              style={{
                boxShadow: "0px 25px 50px -12px #00000040",
              }}
            >
              <img
                src="/passenger.png"
                alt="تجربة الركاب - كوا"
                className="w-full h-auto object-cover min-h-[420px] lg:min-h-[520px]"
              />

              {/* Driver Badge Box inside image bottom */}
              <div className="absolute bottom-[20px] left-[20px] right-[20px] z-10 bg-white/95 backdrop-blur-[12px] p-4 rounded-[16px] shadow-xl flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
                
                {/* Right part: Driver Avatar & Details */}
                <div className="flex items-center gap-3">
                  <img
                    src="/driver-captain.png"
                    alt="أحمد السبيعي"
                    className="w-[44px] h-[44px] rounded-full object-cover border-2 border-[#1F0F8C]"
                  />
                  <div className="flex flex-col text-right">
                    <span className="text-[14px] font-bold text-[#0F172A] leading-tight">
                      أحمد السبيعي
                    </span>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-[12px] font-bold text-[#F59E0B]">
                        ★ 5.0
                      </span>
                      <span className="text-[12px] font-normal text-[#475569]">
                        • كامري أبيض 2024
                      </span>
                    </div>
                  </div>
                </div>

                {/* Left part: ETA Status */}
                <div className="border border-[#E5E2F6] px-[14px] py-[6px] rounded-[12px] flex flex-col text-right">
                  <span className="text-[10px] font-normal text-[#475569]">
                    كابتنك المعتمد في الطريق إليك
                  </span>
                  <span className="text-[14px] font-bold text-[#1F0F8C]">
                    مدة الوصول: دقيقتان فقط
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Left Side: Header Text & 4 Feature Cards */}
          <div className="flex flex-col items-start text-right space-y-4">
            
            {/* 1- Pill Badge */}
            <div className="inline-flex items-center px-[12px] py-[4px] rounded-full bg-[#E2E1F3]/60 backdrop-blur-sm">
              <span className="text-[12px] font-medium text-[#1F0F8C]">
                تجربة الركاب النخبة
              </span>
            </div>

            {/* 2- White Title */}
            <h2 className="text-[32px] sm:text-[36px] font-bold text-white leading-[1.3] tracking-tight">
              رفاهية تتجاوز التوقعات.. في كل وجهة ومسار
            </h2>

            {/* 3- White Description */}
            <p className="text-[15px] sm:text-[16px] font-semibold text-white/90 leading-[1.7] max-w-xl pb-2">
              صممت كوا لتمنحك معايير جديدة للراحة والخصوصية. أسطول حديث متكامل من السيارات الفارهة، مع التزام تام بالمواعيد وضمان أعلى درجات الأمان والسلامة على مدار الساعة.
            </p>

            {/* 4- Grid of 4 Cards in 2 Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full pt-2">
              {passengerFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F7FD] border border-[#E5E2F6] rounded-[16px] p-[16px] flex flex-col items-start text-right space-y-2.5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  {/* Icon Box */}
                  <div
                    className="w-[40px] h-[40px] bg-white rounded-[12px] flex items-center justify-center"
                    style={{
                      boxShadow: "0px 1px 2px 0px #0000000D",
                    }}
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-[20px] h-[20px] object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] font-semibold text-[#0F172A]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[12px] font-normal text-[#64748B] leading-[1.6]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
