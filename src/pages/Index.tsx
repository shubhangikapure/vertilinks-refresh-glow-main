import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import TechnologySection from "@/components/TechnologySection";
import AboutSection from "@/components/AboutSection";
import ProductsShowcase from "@/components/ProductsShowcase";
import SolutionsGrid from "@/components/SolutionsGrid";
import IndustriesSection from "@/components/IndustriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <TechnologySection />
        <AboutSection />
        <ProductsShowcase />
        <SolutionsGrid />
        <IndustriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
