"use client";

const stepsData = [
  {
    number: "١",
    icon: "/step-icon-1.svg",
    title: "حمّل التطبيق في ثوانٍ",
    description: "متوفر مجاناً على منصتي App Store و Google Play",
  },
  {
    number: "٢",
    icon: "/step-icon-2.svg",
    title: "حدّد وجهتك واختر فئتك",
    description: "اختر نوع المركبة وتأكد من السعر والمسار قبل الطلب",
  },
  {
    number: "٣",
    icon: "/step-icon-3.svg",
    title: "استمتع بأرقى تجربة تنقل",
    description: "سائق محترف ومركبة مكيفة ومجهزة تصلك فوراً",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative w-full py-[95px] px-4 sm:px-8 lg:px-[120px] overflow-hidden"
      style={{
        background: `
          linear-gradient(180.37deg, #190B74 10.26%, rgba(25, 11, 116, 0) 61.07%),
          linear-gradient(180deg, rgba(248, 247, 253, 0) 61.83%, #EBEAF8 91.48%),
          linear-gradient(324.51deg, #FFFFFF 10.84%, rgba(255, 255, 255, 0) 18.84%),
          #F8F7FD
        `,
      }}
    >
      <div className="w-full max-w-[1920px] mx-auto flex flex-col items-center">
        
        {/* Row 1: Header Area with Left & Right City Illustrations */}
        <div className="relative w-full min-h-[180px] lg:min-h-[220px] flex items-center justify-center">
          
          {/* Right Image Illustration (City Skyline with loop road) */}
          <img
            src="/steps-1.png"
            alt="خطوات التنقل الذكي"
            className="hidden lg:block absolute -right-[60px] bottom-0 max-w-[380px] xl:max-w-[440px] h-auto object-contain object-bottom pointer-events-none"
          />

          {/* Left Image Illustration (3D Pin with road & car) */}
          <img
            src="/steps-2.png"
            alt="وجهتك مع كوا"
            className="hidden lg:block absolute -left-[60px] bottom-0 max-w-[340px] xl:max-w-[400px] h-auto object-contain object-bottom pointer-events-none"
          />

          {/* Center Text Block */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto px-4 py-4">
            <h2 className="text-[32px] sm:text-[36px] font-bold text-white leading-[1.3] tracking-tight">
              ثلاث خطوات ذكية تفصلك عن وجهتك
            </h2>
            <p className="text-[15px] sm:text-[16px] font-semibold text-[#F4F4F5] leading-[1.7] mt-3">
              تجربة سلسة وفورية تبدأ من شاشة هاتفك وحتى وصولك أمناً ومستمتعاً.
            </p>
          </div>

        </div>

        {/* Row 2: 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] w-full  z-10 relative">
          {stepsData.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-8 lg:p-10 flex flex-col items-center text-center space-y-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                boxShadow: "0px 1px 2px 0px #0000000D",
              }}
            >
              {/* Icon Box Container with Top-Right Arabic Number Circle */}
              <div className="relative">
                {/* Icon Box */}
                <div className="w-[64px] h-[64px] bg-[#1F0F8C]/5 rounded-[16px] flex items-center justify-center">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-[32px] h-[32px] object-contain"
                  />
                </div>

                {/* Arabic Number Badge */}
                <div className="absolute -top-2 -right-2 w-[28px] h-[28px] bg-[#F59E0B] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-[12px] font-normal text-[#06031C] leading-none">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-semibold text-[#0F172A] pt-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[12px] font-normal text-[#64748B] leading-[1.6] max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
