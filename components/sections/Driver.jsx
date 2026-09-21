"use client";

const driverItems = [
  {
    icon: "/driver-1.svg",
    title: "انضمام فوري واعتماد سريع",
    description: "إجراءات تسجيل رقمية مرنة بدون أي تعقيدات أو انتظار.",
  },
  {
    icon: "/driver-2.svg",
    title: "دعم مستمر على مدار الساعة",
    description: "فريق مساندة مخصص للكباتن لضمان تجربة سلسة وتذليل كل عقبة.",
  },
  {
    icon: "/driver-3.svg",
    title: "دخل استثنائي ومكافآت دورية",
    description: "أرباح تُسحب يومياً وحوافز سخية ومكافآت على الرحلات المتميزة.",
  },
];

export default function Driver() {
  return (
    <section
      id="driver"
      className="relative w-full py-[95px] px-4 sm:px-8 lg:px-[120px] bg-[#190B74]"
    >
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[6.5fr_5.5fr] gap-10 lg:gap-6 items-center">
          
                    {/* Right Part: Badge, Title, Description & 3 Feature Items */}
          <div className="flex flex-col items-start text-right space-y-4">
            
            {/* a. Rounded Pill Badge */}
            <div className="inline-flex items-center px-[12px] py-[4px] rounded-full bg-white/10">
              <span className="text-[12px] font-medium text-[#F59E0B]">
                مجتمع كباتن كوا
              </span>
            </div>

            {/* b. White Main Title */}
            <h2 className="text-[32px] sm:text-[36px] font-bold text-white leading-[1.3] tracking-tight">
              كن شريكاً في الريادة.. وحقق أعلى عوائد شهرية
            </h2>

            {/* c. Sub-description */}
            <p className="text-[15px] sm:text-[16px] font-semibold text-[#E2E1F3] leading-[1.7] max-w-xl pb-2">
              انضم إلى نخبة كباتن المملكة في منصة تقدّر وقتك وجهدك. تمتّع بحرية تامة في اختيار أوقات عملك، مع عمولات تنافسية ومكافآت مجزية تدعم نموك المالي واستقرارك.
            </p>

            {/* d. 3 Driver Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[8px] w-full pt-2">
              {driverItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start text-right space-y-2.5"
                >
                  {/* Icon Box */}
                  <div className="w-[40px] h-[40px] bg-white/10 rounded-[12px] flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-[20px] h-[20px] object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] font-semibold text-white leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[12px] font-normal text-[#CDC9E7] leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Left Part: Driver Image with Floating Pill CTA Button */}
          <div className="relative w-full ">
            <div className="relative w-full overflow-hidden border-2 border-[#1C0D7C] rounded-[24px] shadow-2xl">
              <img
                src="/driver.png"
                alt="كابتن كوا - انضم إلينا"
                className="w-full h-auto object-cover min-h-[380px] lg:min-h-[400px]"
              />

              {/* Floating Pill Button inside image (20px space from left & bottom) */}
              <a
                href="#register-driver"
                className="absolute bottom-[20px] left-[20px] z-10 bg-white px-[20px] py-[12px] rounded-full shadow-xl inline-flex items-center gap-[12px] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
              >
              <span className="text-[14px] font-bold text-[#1F0F8C]">
                سجّل الآن ككابتن وابدأ رحلتك الاستثمارية
              </span>
              <img
                src="/arrow-circle.png"
                alt="سجل الآن"
                className="w-6 h-6 object-contain"
              />
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
