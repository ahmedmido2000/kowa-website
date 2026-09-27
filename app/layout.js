import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://kowa.sa"),
  title: "كوا — KOWA | منصة النقل والخدمات اللوجستية الذكية في السعودية",
  description:
    "انضم إلى منصة كوا الذكية للتنقل الفاخر والخدمات اللوجستية بالمملكة العربية السعودية. كباتن سعوديون نخبة، تتبع مسار فوري، وتجربة تنقل استثنائية وآمنة.",
  keywords: [
    "كوا",
    "KOWA",
    "تطبيق كوا",
    "كوا للتنقل",
    "تنقل ذكي",
    "توصيل الرياض",
    "كباتن سعوديين",
    "سيارة فاخرة الرياض",
    "خدمات لوجستية السعودية",
    "تطبيق توصيل السعودية",
  ],
  authors: [{ name: "كوا KOWA Mobility", url: "https://kowa.sa" }],
  publisher: "KOWA Mobility",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-fav.png",
    shortcut: "/logo-fav.png",
    apple: "/logo-fav.png",
  },
  openGraph: {
    title: "كوا — KOWA | منصة النقل والخدمات اللوجستية الذكية في السعودية",
    description:
      "تنقّل بسهولة وأمان في جميع أنحاء المملكة مع منصة كوا الذكية للخدمات اللوجستية والنقل الفاخر.",
    url: "https://kowa.sa",
    siteName: "كوا KOWA Mobility",
    images: [
      {
        url: "/hero-side-image.webp",
        width: 1200,
        height: 630,
        alt: "منصة كوا للتنقل الذكي والفاخر",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "كوا — KOWA | منصة النقل والخدمات اللوجستية الذكية في السعودية",
    description:
      "تنقّل بسهولة وأمان في جميع أنحاء المملكة مع منصة كوا الذكية للخدمات اللوجستية والنقل الفاخر.",
    images: ["/hero-side-image.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kowa.sa/#organization",
      "name": "كوا - KOWA Mobility",
      "url": "https://kowa.sa",
      "logo": "https://kowa.sa/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966920000123",
        "contactType": "customer service",
        "areaServed": "SA",
        "availableLanguage": ["Arabic", "English"],
      },
      "sameAs": [
        "https://x.com/kowa_sa",
        "https://www.tiktok.com/@kowa.sa",
        "https://www.snapchat.com/add/kowa.sa",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://kowa.sa/#website",
      "url": "https://kowa.sa",
      "name": "كوا - KOWA",
      "publisher": { "@id": "https://kowa.sa/#organization" },
      "inLanguage": "ar-SA",
    },
    {
      "@type": "SoftwareApplication",
      "name": "كوا - KOWA",
      "operatingSystem": "iOS, Android",
      "applicationCategory": "TravelApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "SAR",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="h-full scroll-smooth">
      <head>
        <meta name="theme-color" content="#0C0828" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased text-slate-100 bg-[#0C0828]">
        {children}
      </body>
    </html>
  );
}
