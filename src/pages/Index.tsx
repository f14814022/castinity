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
    <BenefitsSection />
    <ConnectedSection />
    <FeatureSection />
    <TestimonialsSection />
    <StatsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
