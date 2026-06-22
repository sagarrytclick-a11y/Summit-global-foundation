import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import ProgressInNumbers from "@/components/ProgressInNumbers";
import ServicesSection from "@/components/ServicesSection";
import TopMedicalCollegesSection from "@/components/TopMedicalCollegesSection";
import TargetSectorsSection from "@/components/TargetSectorsSection";
import AwardsAchievementsSection from "@/components/AwardsAchievementsSection";

const FlagSlider = dynamic(() => import("@/components/FlagSlider"));
const StudyAbroadSection = dynamic(() => import("@/components/StudyAbroadSection"));
const TopCountriesSection = dynamic(() => import("@/components/TopCountriesSection"));
const TopUniversitiesSection = dynamic(() => import("@/components/TopUniversitiesSection"));
const TestimonialSection = dynamic(() => import("@/components/TestimonialSection"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const CampusDiarySection = dynamic(() => import("@/components/CampusDiarySection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const PopupModal = dynamic(() => import("@/components/PopupModal"));

export const metadata: Metadata = {
  title: "Summit Global Foundation | Top MBBS Admission Consultants in Noida",
  description:
    "Summit Global Foundation is a leading MBBS admission consultancy in Noida, Delhi NCR. Get expert guidance for medical admissions in India & abroad — Russia, Kyrgyzstan, Kazakhstan, Nepal, Bangladesh. NEET UG/PG counseling, college selection, scholarships, visa assistance. 5000+ successful students.",
  alternates: {
    canonical: "https://summitglobalfoundation.com",
  },
  openGraph: {
    title: "Summit Global Foundation | Top MBBS Admission Consultants in Noida",
    description:
      "Leading MBBS admission consultancy in Noida for India & abroad admissions. NEET counseling, college selection, visa help. 5000+ students placed.",
    url: "https://summitglobalfoundation.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://summitglobalfoundation.com" },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <WhoWeAre />
      <TopMedicalCollegesSection />
      <StudyAbroadSection />
      <ProgressInNumbers />
      <ServicesSection />
      <TargetSectorsSection />
      <TopUniversitiesSection />
      <TestimonialSection />
      <BlogSection />
      <CampusDiarySection />
      <FAQSection />
      <PopupModal />
    </div>
  );
}
