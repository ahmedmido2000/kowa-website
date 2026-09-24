"use client";

const quickLinks = [
  { label: "كيف تعمل", href: "#how-it-works" },
  { label: "الركاب", href: "#passengers" },
  { label: "الكباتن", href: "#driver" },
  { label: "الأسئلة الشائعة", href: "#faq" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#080417] text-[#E1E3E4] pt-[64px] pb-[48px] px-4 sm:px-8 lg:px-[120px]">
      <div className="w-full max-w-[1920px] mx-auto">
        
        {/* Top Section: 4 Equal-width Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start pb-12">
          
          {/* Column 1: Logo & Platform Description */}
          <div className="flex flex-col items-start text-right space-y-3">
            <a href="#hero" className="inline-block" aria-label="KOWA الصفحة الرئيسية">
              <img
                src="/logo.png"
                alt="KOWA Logo"
                width={79}
                height={52}
                className="w-[79px] h-[52px] object-contain"
              />
            </a>
            <p className="text-[12px] font-normal text-[#E1E3E4] leading-[1.8] max-w-xs pt-1">
              كوا (Kowa) — المنصة السعودية الرائدة في إبتكار حلول التنقل الذكي، بأعلى معايير الأمان والرفاهية والموثوقية.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start text-right space-y-3">
            <h3 className="text-[16px] font-semibold text-white">
              روابط سريعة
            </h3>
            <ul className="space-y-2.5 pt-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] font-normal text-[#E1E3E4] hover:text-[#F5A623] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media Icons */}
          <div className="flex flex-col items-start text-right space-y-3">
            <h3 className="text-[16px] font-semibold text-white">
              تابعنا
            </h3>
            <div className="flex items-center gap-4 pt-2">
              
              
              {/* X (Twitter) Icon */}
              <a
                href="https://x.com/kowa_sa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-[24px] h-[24px] flex items-center justify-center text-[#E1E3E4] hover:text-[#F5A623] transition-colors"
              >
                <svg
                  className="w-[24px] h-[24px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* TikTok Icon */}
              <a
                href="https://www.tiktok.com/@kowa.sa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-[24px] h-[24px] flex items-center justify-center text-[#E1E3E4] hover:text-[#F5A623] transition-colors"
              >
                <svg
                  className="w-[24px] h-[24px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.83.12V9.33a6.34 6.34 0 0 0-1-.08 6.34 6.34 0 1 0 6.34 6.34V8.75a8.28 8.28 0 0 0 4.94 1.41V6.69z" />
                </svg>
              </a>

              {/* Snapchat Icon */}
              <a
                href="https://www.snapchat.com/add/kowa.sa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Snapchat"
                className="w-[24px] h-[24px] flex items-center justify-center text-[#E1E3E4] hover:text-[#F5A623] transition-colors"
              >
                <svg
                  className="w-[24px] h-[24px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.004 2c-3.11 0-5.46 2.06-5.46 4.88 0 1.25.43 2.18 1.05 2.91-.32.37-.88.66-1.63.78-.34.05-.53.3-.46.59.12.5.76.94 1.48.97.23 2.37-1.12 3.49-2.61 3.86-.3.07-.46.33-.37.62.17.59 1.13.97 2.19 1.14.3.05.52.26.54.56.09 1.13 1.94 2.69 5.27 2.69s5.18-1.56 5.27-2.69c.02-.3.24-.51.54-.56 1.06-.17 2.02-.55 2.19-1.14.09-.29-.07-.55-.37-.62-1.49-.37-2.84-1.49-2.61-3.86.72-.03 1.36-.47 1.48-.97.07-.29-.12-.54-.46-.59-.75-.12-1.31-.41-1.63-.78.62-.73 1.05-1.66 1.05-2.91 0-2.82-2.35-4.88-5.46-4.88z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div className="flex flex-col items-start text-right space-y-3">
            <h3 className="text-[16px] font-semibold text-white">
              معلومات التواصل
            </h3>
            <ul className="space-y-2.5 pt-1 text-[13px] font-normal text-[#E1E3E4]">
              <li className="dir-ltr text-right">920000123</li>
              <li className="dir-ltr text-right">support@kowa.sa</li>
              <li>الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>

        </div>

        {/* Bottom Border Line & Copyright Row */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-medium text-[#E1E3E4]">
          
          {/* Right side in RTL: Copyright text */}
          <p className="text-center sm:text-right">
            © 2025 كوا Kowa Mobility. جميع الحقوق محفوظة.
          </p>

          {/* Left side in RTL: Privacy & Terms links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-[#F5A623] transition-colors"
            >
              سياسة الخصوصية
            </a>
            <a
              href="#"
              className="hover:text-[#F5A623] transition-colors"
            >
              الشروط والأحكام
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
