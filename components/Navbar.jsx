"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "كيف تعمل", href: "#how-it-works" },
  { label: "الركاب", href: "#passengers" },
  { label: "الكباتن", href: "#driver" },
  { label: "الأسئلة الشائعة", href: "#faq" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0F2A]/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-[120px] max-w-[1920px] mx-auto flex items-center justify-between">
          {/* Right Part: Logo (79px x 52px) */}
          <a href="#hero" className="flex items-center gap-2 group transition-transform hover:scale-105" aria-label="KOWA الرئيسية">
            <img
              src="/logo.png"
              alt="KOWA Logo"
              width={79}
              height={52}
              className="w-[79px] h-[52px] object-contain"
            />
          </a>

          {/* Center Part: Nav Items */}
          <nav className="hidden lg:flex items-center" aria-label="التنقل الرئيسي">
            <ul className="flex items-center gap-9">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[14px] font-normal text-white/90 hover:text-[#F5A623] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Left Part: Download App Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#download"
              className="inline-flex items-center gap-[8px] rounded-full bg-[#F5A623] px-[20px] py-[10px] transition-all duration-300 hover:bg-[#e0951a] hover:shadow-lg hover:shadow-[#F5A623]/25 active:scale-95"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0F172A"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="text-[14px] font-medium text-[#0F172A]">
                حمّل التطبيق
              </span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/75 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] h-full w-80 max-w-[85vw] bg-[#080417] border-l border-white/10 shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
          <img src="/logo.png" alt="KOWA" className="w-[64px] h-[42px] object-contain" />
          <button
            type="button"
            className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-white/10"
            onClick={() => setMobileOpen(false)}
            aria-label="إغلاق القائمة"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-6 py-6 overflow-y-auto">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 hover:text-[#F5A623] transition-colors text-right"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6 border-t border-white/10 shrink-0">
          <a
            href="#download"
            className="flex items-center justify-center gap-2 rounded-full bg-[#F5A623] px-6 py-3.5 text-base font-medium text-[#0F172A] shadow-lg transition-all active:scale-95"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            حمّل التطبيق
          </a>
        </div>
      </div>
    </>
  );
}
