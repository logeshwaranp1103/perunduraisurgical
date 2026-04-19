import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { assetUrl } from '../utils/assetUrl';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home-strip');
  const [scrolled, setScrolled] = useState(false);
  const scrollToId = useSmoothScroll();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  // Wrapper for navbar to also close mobile menu
  const handleNavClick = (e, id) => {
    closeNav();
    
    if (location.pathname !== '/') {
      // If not on homepage, navigate there with the hash
      navigate(`/#${id}`);
      return;
    }

    // Update underline and scroll
    setActiveSection(id);
    scrollToId(e, id);
  };

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(''); // No active section line on sub-pages
      return;
    }

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
  }, [location.pathname]);

  // Handle local scrolled state even on sub-pages
  useEffect(() => {
    const handleScrollSimple = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScrollSimple);
    return () => window.removeEventListener('scroll', handleScrollSimple);
  }, []);

  return (
    <nav id="topnav" className={scrolled ? 'scrolled' : ''}>
      <a href="/#home-strip" className="logo" onClick={(e) => handleNavClick(e, 'home-strip')}>
        <img src={assetUrl('PS-FULL-LOGO.png')} alt="Perundurai Surgicals" className="logo-img" />
      </a>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
        <li><a href="/#home-strip" className={activeSection === 'home-strip' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'home-strip')}>Home</a></li>
        <li><a href="/#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
        <li><a href="/#products" className={activeSection === 'products' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'products')}>Products</a></li>
        <li><a href="/#services" className={activeSection === 'services' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
      </ul>
      <div className="nav-right">
        <a href="tel:+919865271371" className="nav-contact-btn hidden md:flex">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Contact
        </a>
        <a href="/#contact-form" className="nav-cta" onClick={(e) => handleNavClick(e, 'contact-form')}>Get Quote</a>
        <button className="hamburger" id="hamburger" onClick={toggleNav}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
