import React from 'react';
import Reveal from './Reveal';
import '../styles/Clients.css';

const clients = [
  {
    name: "Govt Hospitals IRT College (Perundurai)",
    type: "Healthcare / Institution",
    icon: "H"
  },
  {
    name: "IRT Nursing College",
    type: "Education / Healthcare",
    icon: "I"
  },
  {
    name: "The Black Medical Officer (Chennimalai)",
    type: "Government / Health",
    icon: "M"
  },
  {
    name: "Erode Periyar Government Hospitals",
    type: "Healthcare Network",
    icon: "G"
  },
  {
    name: "Sports Development Authority of Tamil Nadu (Erode DT)",
    type: "Government / Sports",
    icon: "S"
  },
  {
    name: "Kongu Engineering / Polytechnic College",
    type: "Educational Institution",
    icon: "K"
  }
];

const Clients = () => {
  return (
    <section id="clients" className="th-clients-section">
      <div className="th-clients-container">
        <Reveal animation="reveal-up">
          <div className="th-clients-header">
            <span className="th-clients-label">Institutional Partnerships</span>
            <h2 className="th-clients-title">Our Prestigious Clients</h2>
            <p className="th-clients-subtitle">Trusted by the most respected government and educational institutions across the region.</p>
          </div>
        </Reveal>

        <div className="th-clients-grid">
          {clients.map((client, index) => (
            <Reveal key={index} animation="reveal-up" delay={`${index * 0.1}s`} threshold={0.2}>
              <div className="th-client-premium-card">
                <div className="th-card-inner">
                  <div className="th-card-front">
                    <div className="th-client-badge">
                      <div className="th-badge-inner">
                        <span>{client.icon}</span>
                      </div>
                    </div>
                    <div className="th-client-info">
                      <h3 className="th-client-display-name">{client.name}</h3>
                      <span className="th-client-type">{client.type}</span>
                    </div>
                  </div>
                  <div className="th-card-glow"></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal animation="reveal-up" delay="0.6s">
          <div className="th-clients-footer-v2">
            <div className="th-footer-stat">
              <strong>500+</strong>
              <span>Projects Completed</span>
            </div>
            <div className="th-footer-divider"></div>
            <div className="th-footer-stat">
              <strong>100%</strong>
              <span>Service Satisfaction</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Clients;
