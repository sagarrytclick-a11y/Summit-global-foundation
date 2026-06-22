import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://summitglobalfoundation.com" },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://summitglobalfoundation.com/contact" },
  ],
};

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Summit Global Foundation for MBBS admission counseling. Call, email, or visit our Noida office. Get free guidance for MBBS in India & abroad.",
  openGraph: {
    title: "Contact Summit Global Foundation | MBBS Admission Consultants",
    description:
      "Reach out to Summit Global Foundation for expert MBBS admission counseling. Free guidance for medical admissions in India & abroad.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
