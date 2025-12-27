import type { Metadata } from "next";
import HeroSection from "@/components/Home/HeroSection/HeroSection";

// TODO: جایگزین کنید با API endpoint واقعی
async function getBannerImage() {
  try {
    // مثال: const response = await fetch('YOUR_API_ENDPOINT/banner');
    // const data = await response.json();
    // return data.bannerImage || null;

    // برای تست، null برمی‌گرداند (تصویر پیش‌فرض نمایش داده می‌شود)
    return null;
  } catch (error) {
    console.error("Error fetching banner:", error);
    return null;
  }
}

export const metadata: Metadata = {
  title: "صفحه اصلی",
  description:
    "فروش سرور و تجهیزات شبکه با بهترین قیمت و کیفیت. خرید سرور، تجهیزات شبکه، رم سرور، هارد سرور و پردازنده با گارانتی معتبر.",
  openGraph: {
    title: "استوک سرور | Stock Server - فروش سرور و تجهیزات شبکه",
    description: "فروش سرور و تجهیزات شبکه با بهترین قیمت و کیفیت",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const bannerImage = await getBannerImage();

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "استوک سرور",
    alternateName: "Stock Server",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://stock-server.ir",
    description: "فروش سرور و تجهیزات شبکه با بهترین قیمت و کیفیت",
    inLanguage: "fa-IR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${
          process.env.NEXT_PUBLIC_SITE_URL || "https://stock-server.ir"
        }/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "استوک سرور",
    alternateName: "Stock Server",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://stock-server.ir",
    logo: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://stock-server.ir"
    }/Images/Baner/Layer 5.png`,
    description: "فروش سرور و تجهیزات شبکه",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IR",
      addressLocality: "تهران",
    },
    sameAs: [
      "https://t.me/stock-server",
      "https://www.linkedin.com/company/stock-server",
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <h1 className="sr-only">استوک سرور - فروش سرور و تجهیزات شبکه</h1>
      <HeroSection bannerImage={bannerImage} />
    </main>
  );
}
