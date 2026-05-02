import Reveal from '../components/Reveal';

const ShowcaseBand = () => {
  return (
    <div className="showcase-band" style={{ paddingTop: '40px', paddingBottom: '60px', background: '#fff' }}>
      <div className="showcase-inner-4col">
        <Reveal className="sc-img" animation="reveal-left" style={{ height: '280px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
          <img src=""
            alt="Housekeeping supplies" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="sc-label">Cleaning Chemicals</div>
        </Reveal>
        <Reveal className="sc-img" animation="reveal-up" delay="0.1s" style={{ height: '280px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
          <img src=""
            alt="Waste management" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="sc-label">Cleaning Tools</div>
        </Reveal>
        <Reveal className="sc-img" animation="reveal-up" delay="0.2s" style={{ height: '280px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
          <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Floor cleaning" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="sc-label">Waste Management</div>
        </Reveal>
        <Reveal className="sc-img" animation="reveal-right" delay="0.3s" style={{ height: '280px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
          <img src=""
            alt="Hygiene paper" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="sc-label">Hygiene Products</div>
        </Reveal>
      </div>
    </div>
  );
};

export default ShowcaseBand;
