"use client";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative w-full py-[95px] px-4 sm:px-8 lg:px-[120px] overflow-hidden flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "url('/cta-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-[1920px] mx-auto flex flex-col items-center justify-center text-center">
        
        {/* 1. Small Gold Text */}
        <span className="text-[14px] font-medium text-[#F59E0B] tracking-wide">
          تنقل أذكى.. أسرع.. وأكثر راحة
        </span>

        {/* 2. White Main Title (12px gap under small text) */}
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-white leading-[1.25] mt-[12px] max-w-4xl tracking-tight">
          جاهز لتجربة تنقل استثنائية لم تعهدها من قبل؟
        </h2>

        {/* 3. Sub-description (12px gap under title) */}
        <p className="text-[15px] sm:text-[16px] font-normal text-[#E1E3E4] leading-[1.7] mt-[12px] max-w-2xl">
          انضم إلى آلاف المستخدمين الذين يثقون في كوا يومياً في شتى أنحاء المملكة.
        </p>

        {/* 4. 2 App Store Buttons (32px gap under description) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-[32px]">
          
          {/* App Store Button */}
          <a
            href="#download"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-[16px] bg-white hover:bg-slate-100 text-slate-900 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <img
              src="/apple.svg"
              alt="App Store"
              className="w-6 h-6 object-contain"
            />
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-medium text-slate-500 leading-tight">
                حمله من
              </span>
              <span className="text-[15px] font-bold text-slate-900 leading-tight">
                App Store
              </span>
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="#download"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-[16px] bg-white hover:bg-slate-100 text-slate-900 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <img
              src="/google-play.svg"
              alt="Google Play"
              className="w-6 h-6 object-contain"
            />
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-medium text-slate-500 leading-tight">
                حمله من
              </span>
              <span className="text-[15px] font-bold text-slate-900 leading-tight">
                Google Play
              </span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
