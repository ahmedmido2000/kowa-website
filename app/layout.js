import "./globals.css";

export const metadata = {
  title: "كوا — KOWA | منصة النقل والخدمات اللوجستية الذكية",
  description:
    "تنقّل بسهولة وأمان في جميع أنحاء المملكة مع منصة كوا الذكية للخدمات اللوجستية والنقل.",
  openGraph: {
    title: "كوا — KOWA | منصة النقل والخدمات اللوجستية الذكية",
    description:
      "تنقّل بسهولة وأمان في جميع أنحاء المملكة مع منصة كوا الذكية للخدمات اللوجستية والنقل.",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "كوا — KOWA | منصة النقل والخدمات اللوجستية الذكية",
    description:
      "تنقّل بسهولة وأمان في جميع أنحاء المملكة مع منصة كوا الذكية للخدمات اللوجستية والنقل.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans antialiased text-slate-100">
        {children}
      </body>
    </html>
  );
}
