import Reveal from './Reveal';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const About = () => {
  const scrollToId = useSmoothScroll();
  return (
    <section id="about" className="section alt">
      <div className="about-grid">
        <div className="mobile-about-title">
          <Reveal animation="reveal-up">
            <span className="s-tag">About Us</span>
            <h2 className="s-title">Rooted in <em>Perundurai,</em><br />Serving Tamil Nadu</h2>
          </Reveal>
        </div>

        <Reveal className="about-visual" animation="reveal-left">
          <div className="about-img" style={{ background: 'none', padding: 0 }}>
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85&auto=format&fit=crop"
              alt="Medical warehouse and storage"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} loading="lazy" />
            <div className="about-chip">
              <strong>2009</strong>
              <span>Est. Since</span>
            </div>
          </div>
          <div className="text-center" style={{ position: 'relative', zIndex: 10, marginTop: '12px', marginBottom: '4px' }}>
            <a href="#enterprise" onClick={(e) => scrollToId(e, 'enterprise')} style={{ textDecoration: 'none' }} className="about-enterprise-link text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2">
              <span>Associated with Thiyash Enterprise</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 hover-bounce-arrow">
                <path d="M7 13l5 5l5-5M12 6v12" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal animation="reveal-right">
          <div className="desktop-about-title">
            <span className="s-tag">About Us</span>
            <h2 className="s-title">Rooted in <em>Perundurai,</em><br />Serving Tamil Nadu</h2>
          </div>
          <p className="s-sub">Perundurai Surgicals is a leading wholesale distributor of pharmaceutical and surgical products based in Perundurai, Erode District. We cater to government hospitals, private clinics, nursing homes, and retail pharmacies with genuine, quality-assured products.</p>
          <ul className="about-facts">
            <Reveal as="li" className="about-fact" animation="reveal-up" threshold={0.1}>
              <div className="fact-icon">
                <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
              <div className="fact-text">
                <strong>Proprietor</strong>
                <p>K. Ragavendran B.E. — Over 10 years of industry expertise.</p>
              </div>
            </Reveal>
            <Reveal as="li" className="about-fact" animation="reveal-up" delay="0.1s" threshold={0.1}>
              <div className="fact-icon">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div className="fact-text">
                <strong>Strategic Location</strong>
                <p>Based in Perundurai, the heart of Erode's healthcare hub.</p>
              </div>
            </Reveal>
            <Reveal as="li" className="about-fact" animation="reveal-up" delay="0.2s" threshold={0.1}>
              <div className="fact-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <div className="fact-text">
                <strong>Swift Operations</strong>
                <p>Mon–Sat: 9:00 AM – 7:00 PM. Local same-day dispatch.</p>
              </div>
            </Reveal>
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
