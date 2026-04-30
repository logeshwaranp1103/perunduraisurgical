import Reveal from '../components/Reveal';

const WhyUs = () => {
  return (
    <section id="why-us" className="th-why-us">
      <div className="th-container">
        <Reveal className="th-why-header" animation="reveal-up">
          <div className="th-why-title-wrap">
            <span className="th-section-tag">The Thiyash Advantage</span>
            <h2 className="th-section-title">Why Industry Leaders <em>Trust Us</em></h2>
          </div>
          <div className="th-why-desc-wrap">
            <p className="th-section-sub">We deliver more than just supplies; we deliver reliability and operational excellence.</p>
          </div>
        </Reveal>

        <Reveal className="th-why-main-visual" animation="reveal-up" delay="0.1s">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&w=1600&q=80"
            alt="Professional housekeeping management"
          />
          <div className="th-why-visual-label">Professional housekeeping management</div>
        </Reveal>

        <div className="th-why-grid">
          <Reveal className="th-why-card" delay="0.2s">
            <div className="th-why-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
            </div>
            <h3>Express Logistics</h3>
            <p>Optimized supply chain for same-day delivery in Erode and swift distribution across Tamil Nadu.</p>
          </Reveal>

          <Reveal className="th-why-card" delay="0.3s">
            <div className="th-why-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
            </div>
            <h3>Wholesale Economics</h3>
            <p>Direct-to-enterprise pricing models that significantly reduce facility management overheads.</p>
          </Reveal>

          <Reveal className="th-why-card" delay="0.4s">
            <div className="th-why-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h3>Certified Quality</h3>
            <p>100% genuine industrial-grade products sourced from authorized national manufacturers.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
