import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://summitglobalfoundation.com" },
    { "@type": "ListItem", position: 2, name: "MBBS India", item: "https://summitglobalfoundation.com/colleges/mbbs-india" },
  ],
};

export const metadata: Metadata = {
  title: "MBBS in India 2025-26",
  description:
    "Explore top MBBS colleges in India. Get details on Government & Private medical colleges, fees, NEET cutoffs, admission process, and counseling guidance by Summit Global Foundation.",
  openGraph: {
    title: "MBBS in India 2025-26 | Summit Global Foundation",
    description:
      "Browse top Government & Private medical colleges in India. NEET cutoffs, fees, admission process, and expert counseling by Summit Global Foundation.",
  },
};

export default function MbbsIndiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
