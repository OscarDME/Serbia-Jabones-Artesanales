import Hero from "@/components/Hero";
import SoapCarousel from "@/components/SoapCarousel";
import InstructorIntro from "@/components/InstructorIntro";
import Benefits from "@/components/Benefits";
import Trending from "@/components/Trending";
import CourseContent from "@/components/CourseContent";
import MegapackIncludes from "@/components/MegapackIncludes";
import Bonuses from "@/components/Bonuses";
import Features from "@/components/Features";
import PrimaryPricing from "@/components/PrimaryPricing";
import SocialProof from "@/components/SocialProof";
import ReviewScreenshots from "@/components/ReviewScreenshots";
import Curriculum from "@/components/Curriculum";
import UrgencyBanner from "@/components/UrgencyBanner";
import FinalCta from "@/components/FinalCta";
import InstructorBio from "@/components/InstructorBio";
import Testimonials from "@/components/Testimonials";
import ClosingProof from "@/components/ClosingProof";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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
