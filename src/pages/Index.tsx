import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ConnectedSection from "@/components/landing/ConnectedSection";
import FeatureSection from "@/components/landing/FeatureSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import StatsSection from "@/components/landing/StatsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ServicesSection />

    <div className="[content-visibility:auto] [contain-intrinsic-size:900px]">
      <BenefitsSection />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:900px]">
      <ConnectedSection />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:900px]">
      <FeatureSection />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:900px]">
      <TestimonialsSection />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:700px]">
      <StatsSection />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:700px]">
      <CTASection />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:500px]">
      <Footer />
    </div>
  </div>
);

export default Index;
