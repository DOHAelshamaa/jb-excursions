import './styles/global.css';

import Navbar              from './components/Navbar';
import HeroSection         from './sections/HeroSection';
import ExperiencesSection  from './sections/ExperiencesSection';
import GallerySection      from './sections/GallerySection';
import AboutSection        from './sections/AboutSection';
import FeaturesSection     from './sections/FeaturesSection';
import CTASection          from './sections/CTASection';
import TestimonialsSection from './sections/TestimonialsSection';
import Footer              from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ExperiencesSection />
        <GallerySection />
        <AboutSection />
        <FeaturesSection />
        <CTASection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
