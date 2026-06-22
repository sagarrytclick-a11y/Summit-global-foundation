import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://summitglobalfoundation.com" },
    { "@type": "ListItem", position: 2, name: "NEET Rank Predictor", item: "https://summitglobalfoundation.com/neet-rank-predictor" },
  ],
};

export const metadata: Metadata = {
  title: "NEET Rank Predictor 2025",
  description:
    "Predict your NEET rank based on your score using our NEET Rank Predictor. Check estimated rank range, cutoff trends, and college options for MBBS admission.",
  openGraph: {
    title: "NEET Rank Predictor 2025 | Summit Global Foundation",
    description:
      "Use our NEET Rank Predictor to estimate your rank from your NEET score. Check cutoff trends and explore college options for MBBS admission.",
  },
};

export default function NeetRankPredictorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
