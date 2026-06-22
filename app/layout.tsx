import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PopupProvider } from "@/contexts/PopupContext";
import LayoutWrapper from "@/components/LayoutWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://summitglobalfoundation.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0e24",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Summit Global Foundation | MBBS Admission Consultants in Noida",
    template: "%s | Summit Global Foundation",
  },
  description:
    "Leading MBBS admission consultants in Noida, Delhi NCR. Expert guidance for MBBS in India & abroad (Russia, Kyrgyzstan, Kazakhstan, Nepal, Bangladesh). NEET UG/PG counseling, college selection, and visa assistance since 2010.",
  keywords: [
    "MBBS admission consultants",
    "MBBS in India",
    "MBBS abroad",
    "NEET counseling",
    "medical college admission",
    "Summit Global Foundation",
    "MBBS in Russia",
    "MBBS in Kyrgyzstan",
    "MBBS in Kazakhstan",
    "study medicine abroad",
    "Noida MBBS consultant",
    "NEET UG counseling",
    "NEET PG counseling",
    "top medical colleges India",
    "MD MS admission India",
  ],
  authors: [{ name: "Summit Global Foundation" }],
  creator: "Summit Global Foundation",
  publisher: "Summit Global Foundation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Summit Global Foundation",
    title: "Summit Global Foundation | MBBS Admission Consultants",
    description:
      "Expert MBBS admission guidance for India & abroad. NEET counseling, college selection, visa assistance. 5000+ students placed since 2010.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Summit Global Foundation - MBBS Admission Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Global Foundation | MBBS Admission Consultants",
    description:
      "Expert MBBS admission guidance for India & abroad. NEET counseling, college selection, visa assistance.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "link:preconnect": [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Summit Global Foundation",
            description:
              "MBBS admission consultants offering guidance for medical education in India and abroad.",
            url: siteUrl,
            telephone: "+91-9876543210",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Noida",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
            areaServed: ["IN", "RU", "KZ", "KG", "NP", "BD"],
            foundingDate: "2010",
            slogan: "Your Gateway to Medical Education",
          }),
        }}
      />
      <body className="min-h-full flex flex-col">
        <PopupProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </PopupProvider>
      </body>
    </html>
  );
}
