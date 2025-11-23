import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./sections/HeroSection";
import { OriginSection } from "./sections/OriginSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { CollectionsSection } from "./sections/CollectionsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { CTASection } from "./sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <OriginSection />
        <BenefitsSection />
        <CollectionsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
