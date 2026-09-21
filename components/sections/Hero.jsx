"use client";

import AnalyticsBar from "./AnalyticsBar";

export default function Hero() {
  return (
    <div className="relative w-full">
      {/* Main Hero Background Section */}
      <section
        id="hero"
        className="relative w-full pt-28 pb-20 lg:pt-36 lg:pb-28 flex flex-col justify-between overflow-visible"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "left center !important",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Main Content Area (120px Horizontal Padding on Desktop) */}
        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-[120px] max-w-[1920px] mx-auto my-auto flex-1 flex flex-col justify-center">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-4 pb-12">
            
            {/* Right Column: Arabic Text & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-right space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623] animate-pulse" />
                <span className="text-[13px] sm:text-[14px] font-medium text-white/95">
                  المنصة الوطنية الرائدة للتنقل الذكي الفاخر بالمملكة
                </span>
              </div>

              {/* H1 Main Heading with custom row gap */}
              <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-extrabold text-white tracking-tight flex flex-col gap-2.5 sm:gap-3.5 leading-[1.25]">
                <span>ارتقِ بتجربة تنقلك..</span>
                <span>
                  <span className="text-[#F5A623]">فخامة استثنائية</span> تليق بك
                </span>
              </h1>

              {/* Subtext Paragraph */}
              <p className="text-[15px] sm:text-[17px] font-normal leading-[1.8] text-slate-300/90 max-w-xl pt-1">
                أعد تعريف تجربة تنقلك اليومي في المملكة. رفاهية استثنائية، كباتن سعوديون نخبة، وتتبع مسار فوري بدقة فائقة مع تسعيرة مضمونة ومحددة مسبقاً. رحلتك معنا تبدأ بلمسة وتكتمل براحة بال مطلقة.
              </p>

              {/* App Store Download Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                
                {/* App Store Button */}
                <a
                  href="#download"
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
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
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
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

            {/* Left Column: Side Image (Car + App Screens) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[580px] lg:max-w-[640px]">
                <img
                  src="/hero-side-image.png"
                  alt="كوا - التنقل الذكي"
                  className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>

          </div>

        </div>

        {/* Analytics / Stats Bar (Desktop Only: md and above) */}
        <div className="hidden md:block absolute left-0 right-0 bottom-0 translate-y-1/2 z-30 px-4 sm:px-8 lg:px-[120px]">
          <AnalyticsBar />
        </div>

      </section>
    </div>
  );
}
