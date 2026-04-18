import { useState, useEffect } from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { assetUrl } from '../utils/assetUrl';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home-strip');
  const [scrolled, setScrolled] = useState(false);
  const scrollToId = useSmoothScroll();

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  // Wrapper for navbar to also close mobile menu
  const handleNavClick = (e, id) => {
    // Update underline immediately on click to avoid stale active state.
    setActiveSection(id);
    closeNav();
    scrollToId(e, id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      const aboutSection = document.getElementById('about');

      // Keep Home active for everything above About (hero + marquee area).
      if (aboutSection && scrollPos < aboutSection.offsetTop) {
        setActiveSection('home-strip');
        setScrolled(window.scrollY > 40);
        return;
      }

      const sectionIds = ['about', 'products', 'services', 'contact'];
      let current = 'contact';

      sectionIds.forEach((id) => {
        const sec = document.getElementById(id);
        if (sec && scrollPos >= sec.offsetTop) current = id;
      });

      setActiveSection(current);
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="topnav" className={scrolled ? 'scrolled' : ''}>
      <a href="#home-strip" className="logo" onClick={(e) => handleNavClick(e, 'home-strip')}>
        <img src={assetUrl('PS-FULL-LOGO.png')} alt="Perundurai Surgicals" className="logo-img" />
      </a>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
        <li><a href="#home-strip" className={activeSection === 'home-strip' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'home-strip')}>Home</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
        <li><a href="#products" className={activeSection === 'products' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'products')}>Products</a></li>
        <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
      </ul>
      <div className="nav-right">
        <a href="tel:+919865271371" className="nav-contact-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
          </svg>
          Contact
        </a>
        <a href="#contact-form" className="nav-cta" onClick={(e) => handleNavClick(e, 'contact-form')}>Get Quote</a>
        <button className="hamburger" id="hamburger" onClick={toggleNav}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
