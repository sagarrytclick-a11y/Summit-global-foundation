import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://summitglobalfoundation.com" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://summitglobalfoundation.com/about" },
  ],
};

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Summit Global Foundation — Noida's trusted MBBS admission consultancy with 15+ years of experience, 5000+ successful placements, and 100+ partner colleges worldwide.",
  openGraph: {
    title: "About Summit Global Foundation | MBBS Admission Consultants",
    description:
      "Trusted MBBS admission consultants in Noida with 15+ years of experience. 5000+ students placed in top medical colleges across India & abroad.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
