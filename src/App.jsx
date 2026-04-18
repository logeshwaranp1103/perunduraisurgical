import Navbar from './components/Navbar';
import MarqueeStrip from './components/MarqueeStrip';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ShowcaseBand from './components/ShowcaseBand';
import About from './components/About';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Brands from './components/Brands';
import Licenses from './components/Licenses';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import EnterpriseDetails from './components/EnterpriseDetails';
import Footer from './components/Footer';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Reveal logic moved to useReveal hook for better React compatibility
  }, []);

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

export default App;
