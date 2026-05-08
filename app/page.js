import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const SoapCarousel = dynamic(() => import("@/components/SoapCarousel"));
const InstructorIntro = dynamic(() => import("@/components/InstructorIntro"));
const Benefits = dynamic(() => import("@/components/Benefits"));
const Trending = dynamic(() => import("@/components/Trending"));
const CourseContent = dynamic(() => import("@/components/CourseContent"));
const MegapackIncludes = dynamic(() => import("@/components/MegapackIncludes"));
const Bonuses = dynamic(() => import("@/components/Bonuses"));
const Features = dynamic(() => import("@/components/Features"));
const PrimaryPricing = dynamic(() => import("@/components/PrimaryPricing"));
const SocialProof = dynamic(() => import("@/components/SocialProof"));
const ReviewScreenshots = dynamic(() => import("@/components/ReviewScreenshots"));
const Curriculum = dynamic(() => import("@/components/Curriculum"));
const UrgencyBanner = dynamic(() => import("@/components/UrgencyBanner"));
const FinalCta = dynamic(() => import("@/components/FinalCta"));
const InstructorBio = dynamic(() => import("@/components/InstructorBio"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const ClosingProof = dynamic(() => import("@/components/ClosingProof"));
const Guarantee = dynamic(() => import("@/components/Guarantee"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function LandingPage() {
  return (
    <main className="min-h-screen font-sans">
      <Hero />
      <SoapCarousel />
      <InstructorIntro />
      <Benefits />
      <Trending />
      <CourseContent />
      <MegapackIncludes />
      <Bonuses />
      <Features />
      <PrimaryPricing />
      <SocialProof />
      <ReviewScreenshots />
      <Curriculum />
      <UrgencyBanner />
      <FinalCta />
      <InstructorBio />
      <Testimonials />
      <ClosingProof />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
}