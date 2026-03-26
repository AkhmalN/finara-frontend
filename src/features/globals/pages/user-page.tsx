import Header from "@/components/layouts/app-layout/Header";
import Footer from "@/components/layouts/app-layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MenuSection from "@/components/sections/MenuSection";
import { useFeature } from "@/context/feature-context";
import FeatureSection from "@/components/sections/FeatureSection";

export default function UserPage() {
  const { activeFeature, setActiveFeature } = useFeature();

  return (
    <>
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <MenuSection
          activeFeature={activeFeature}
          setActiveFeature={setActiveFeature}
        />
        <FeatureSection />
      </main>
      <Footer />
    </>
  );
}
