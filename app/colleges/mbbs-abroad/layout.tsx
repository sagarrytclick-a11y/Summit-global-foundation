import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://summitglobalfoundation.com" },
    { "@type": "ListItem", position: 2, name: "MBBS Abroad", item: "https://summitglobalfoundation.com/colleges/mbbs-abroad" },
  ],
};

export const metadata: Metadata = {
  title: "MBBS Abroad 2025-26",
  description:
    "Study MBBS abroad at top medical universities in Russia, Kyrgyzstan, Kazakhstan, Nepal, Bangladesh & more. Affordable fees, NMC-approved, expert admission guidance by Summit Global Foundation.",
  openGraph: {
    title: "MBBS Abroad 2025-26 | Summit Global Foundation",
    description:
      "Study MBBS abroad at NMC-approved universities. Russia, Kyrgyzstan, Kazakhstan, Nepal, Bangladesh — affordable fees, expert visa & admission support.",
  },
};

export default function MbbsAbroadLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
