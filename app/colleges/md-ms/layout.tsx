import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://summitglobalfoundation.com" },
    { "@type": "ListItem", position: 2, name: "MD/MS", item: "https://summitglobalfoundation.com/colleges/md-ms" },
  ],
};

export const metadata: Metadata = {
  title: "MD MS in India 2025-26",
  description:
    "Explore MD & MS colleges in India for postgraduate medical education. Get details on specializations, colleges, NEET PG cutoffs, and admission guidance by Summit Global Foundation.",
  openGraph: {
    title: "MD MS in India 2025-26 | Summit Global Foundation",
    description:
      "Find top MD & MS colleges in India. Browse specializations, NEET PG cutoffs, fees, and admission support by Summit Global Foundation.",
  },
};

export default function MdMsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
