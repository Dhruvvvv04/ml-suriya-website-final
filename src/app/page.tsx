import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import AboutSection from "@/components/home/AboutSection";
import AchievementsCounterSection from "@/components/home/AchievementsCounterSection";
import FourRSection from "@/components/home/FourRSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import FeaturedPublicationsSection from "@/components/home/FeaturedPublicationsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FeedbackSection from "@/components/home/FeedbackSection";
import MediaHighlightsSection from "@/components/home/MediaHighlightsSection";
import YouTubeSection from "@/components/home/YouTubeSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";
import SectionDivider from "@/components/ui/SectionDivider";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MarqueeSection />
      
      <main>
        <AboutSection />
        
        <AchievementsCounterSection />
        
        <FourRSection />
        
        <PhilosophySection />
        <SectionDivider variant="subtle" />
        
        <FeaturedPublicationsSection />
        
        <ServicesSection />
        <SectionDivider />
        
        <TestimonialsSection />
        <SectionDivider variant="subtle" />
        
        <FeedbackSection />
        <SectionDivider variant="subtle" />
        
        <MediaHighlightsSection />
        
        <YouTubeSection />
        
        <CTASection />
        
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
