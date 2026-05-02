import Reveal from '../components/Reveal';
import '../styles/EnterpriseDetails.css';

const EnterpriseDetails = () => {
  return (
    <section className="ent-section">
      <div className="ent-container">
        <Reveal animation="reveal-up">
          <div id="enterprise" className="ent-heading">
            <span className="ent-heading-tag">Associated Enterprise</span>
          </div>
        </Reveal>

        <Reveal animation="reveal-up">
          <div className="ent-card">

            {/* Main Bento Content */}
            <main className="ent-main">
              {/* Branding Section */}
              <div className="ent-brand">
                <div className="ent-brand-left">
                  {/* Logo */}
                  <div className="ent-logo-wrap">
                    <img src={`${import.meta.env.BASE_URL}thiyash/thiyash-logo.png`} alt="Thiyash Enterprise" className="ent-logo-img" />
                  </div>
                  <p className="ent-tagline">
                    Manufacturer of Housekeeping Products
                  </p>
                </div>
                <div className="ent-brand-right">
                  <div className="ent-iso-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 15l-2 5l-2-5l-4-4l5-2l5-2l5 2l5 2l-4 4z" />
                      <circle cx="12" cy="8" r="5" />
                    </svg>
                    ISO Certified Manufacturing
                  </div>
                </div>
              </div>

              {/* Bento Layout */}
              <div className="ent-bento">
                {/* Left Column: Capabilities & Industries */}
                <div className="ent-left">
                  {/* Core Capabilities */}
                  <div className="ent-caps-grid">
                    <div className="ent-cap-item">
                      <div className="ent-cap-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          <path d="M5 11h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V11z" />
                          <circle cx="12" cy="16" r="1" />
                        </svg>
                      </div>
                      <h3 className="ent-cap-label">Medical Hygiene</h3>
                    </div>
                    <div className="ent-cap-item">
                      <div className="ent-cap-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" />
                        </svg>
                      </div>
                      <h3 className="ent-cap-label">Industrial Reliability</h3>
                    </div>
                    <div className="ent-cap-item">
                      <div className="ent-cap-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="1" y="3" width="15" height="13" />
                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                          <circle cx="5.5" cy="18.5" r="2.5" />
                          <circle cx="18.5" cy="18.5" r="2.5" />
                        </svg>
                      </div>
                      <h3 className="ent-cap-label">Pan India Delivery</h3>
                    </div>
                    <div className="ent-cap-item">
                      <div className="ent-cap-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4l3 3" />
                        </svg>
                      </div>
                      <h3 className="ent-cap-label">Quality Assurance</h3>
                    </div>
                  </div>

                  {/* Industries Served */}
                  <div className="ent-industries">
                    <h4 className="ent-industries-title">Industries Served</h4>
                    <div className="ent-industries-grid">
                      {['Hospitals', 'Hotels', 'Resorts', 'Banks', 'Institutions', 'Multiplexes'].map((industry) => (
                        <span key={industry} className="ent-industry-chip">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="ent-stats-row">
                    <div className="ent-stat ent-stat-border">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                        <path d="M9 22v-4h6v4" />
                        <path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
                      </svg>
                      <span className="ent-stat-num">500+</span>
                      <span className="ent-stat-lbl">Clients</span>
                    </div>
                    <div className="ent-stat ent-stat-border">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span className="ent-stat-num">10+</span>
                      <span className="ent-stat-lbl">Years Experience</span>
                    </div>
                    <div className="ent-stat">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="3" width="15" height="13" />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                      <span className="ent-stat-num">Pan India</span>
                      <span className="ent-stat-lbl">Supply Network</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Contact Card */}
                <div className="ent-right">
                  <div className="ent-glow"></div>
                  <div className="ent-contact-card">
                    {/* Red Accent Bar */}
                    <div className="ent-accent-bar"></div>

                    <div className="ent-proprietor">
                      <h5 className="ent-proprietor-name">K. Ragavendran B.E.</h5>
                      <span className="ent-proprietor-role">Proprietor</span>
                    </div>

                    <div className="ent-contact-list">
                      <a className="ent-contact-item" href="tel:9865271371">
                        <div className="ent-contact-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>
                        <span className="ent-contact-phone">98652 71371</span>
                      </a>
                      <a className="ent-contact-item" href="mailto:thiyashenterprise@gmail.com">
                        <div className="ent-contact-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </div>
                        <span className="ent-contact-email">thiyashenterprise@gmail.com</span>
                      </a>
                      <div className="ent-contact-item">
                        <div className="ent-contact-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <p className="ent-contact-addr">
                          88/11, Thendral Nagar,<br />
                          Chenniyavalasu Road,<br />
                          Perundurai - 638 052.
                        </p>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/919865271371?text=${encodeURIComponent("Hello, I'm interested in Thiyash Enterprise's housekeeping products. Could you please provide more details about your products and pricing?")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ent-wa-btn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.132 1.528 5.88L0 24l6.282-1.501A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.875 9.875 0 01-5.031-1.378l-.361-.214-3.732.893.924-3.638-.235-.374A9.856 9.856 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106c5.419 0 9.894 4.474 9.894 9.894 0 5.419-4.475 9.894-9.894 9.894z" />
                      </svg>
                      Inquire on WhatsApp
                    </a>

                  </div>
                </div>
              </div>

            </main>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EnterpriseDetails;
