import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://summitglobalfoundation.com" },
    { "@type": "ListItem", position: 2, name: "BTech", item: "https://summitglobalfoundation.com/colleges/btech" },
  ],
};

export const metadata: Metadata = {
  title: "BTech in India 2025-26",
  description:
    "Explore BTech colleges in India for engineering education. Get details on specializations, colleges, JEE cutoffs, fees, and admission guidance by Summit Global Foundation.",
  openGraph: {
    title: "BTech in India 2025-26 | Summit Global Foundation",
    description:
      "Find top BTech colleges in India. Browse specializations, JEE cutoffs, fees, and admission support by Summit Global Foundation.",
  },
};

export default function BtechLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
