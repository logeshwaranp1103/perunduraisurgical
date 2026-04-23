import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MarqueeStrip from '../components/MarqueeStrip';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import ShowcaseBand from '../components/ShowcaseBand';
import About from '../components/About';
import Products from '../components/Products';
import WhyUs from '../components/WhyUs';
import Brands from '../components/Brands';
import Licenses from '../components/Licenses';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import EnterpriseDetails from '../components/EnterpriseDetails';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function HomePage() {
  const location = useLocation();
  const scrollToId = useSmoothScroll(68);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Small timeout to ensure DOM is ready and Reveal animations don't interfere too much
      const timeout = setTimeout(() => {
        scrollToId(null, id);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [location.hash, scrollToId]);

  return (
    <>
      <Navbar />
      <MarqueeStrip />
      <Hero />
      <StatsBar />
      <ShowcaseBand />
      <About />
      <Products />
      <WhyUs />
      <Brands />
      <Licenses />
      <Services />
      <Testimonials />
      <Contact />
      <EnterpriseDetails />
      <FAQ />
      <Footer />
    </>
  );
}
