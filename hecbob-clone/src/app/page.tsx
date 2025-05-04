import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NewSection from '@/components/NewSection';
import AboutSection from '@/components/AboutSection';
import CompetitiveSection from '@/components/CompetitiveSection';
import FranchiseSection from '@/components/FranchiseSection';
import InteriorSection from '@/components/InteriorSection';
import CostSection from '@/components/CostSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <NewSection />
      <AboutSection />
      <FranchiseSection />
      <CompetitiveSection />
      <InteriorSection />
      <CostSection />
      <Footer />
    </main>
  );
}
