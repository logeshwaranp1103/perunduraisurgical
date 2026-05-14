import Reveal from '../components/Reveal';

const Licenses = () => {
  return (
    <section id="licenses" className="section" style={{ paddingTop: '30px' }}>
      <Reveal className="s-head center" animation="reveal-up">
        <span className="s-tag">Certifications</span>
        <h2 className="s-title">Licensed & <em>Fully Compliant</em></h2>
        <p className="s-sub" style={{ margin: '0 auto' }}>All operations are registered and compliant with Indian commercial regulations.</p>
      </Reveal>
      <Reveal className="section-visual" animation="reveal-up" delay="0.05s">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=85&auto=format&fit=crop"
          alt="Official business compliance and documentation"
          loading="lazy"
        />
      </Reveal>
      <div className="lic-grid">
        <Reveal className="lic-card" animation="reveal-scale">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>
          <h4>MSME Registration</h4>
          <p>UDYAM-TN-XX-XXXXXXX</p>
        </Reveal>
      </div>
    </section>
  );
};

export default Licenses;
