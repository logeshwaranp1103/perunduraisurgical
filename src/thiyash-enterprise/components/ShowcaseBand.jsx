import Reveal from '../components/Reveal';

const ShowcaseBand = () => {
  return (
    <div className="showcase-band" style={{ paddingTop: '40px', paddingBottom: '60px', background: '#fff' }}>
      <div className="showcase-inner-4col">
        <Reveal className="sc-img" animation="reveal-left" style={{ height: '280px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80&auto=format&fit=crop"
            alt="Cleaning Chemicals" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="sc-label">Cleaning Chemicals</div>
        </Reveal>
        <Reveal className="sc-img" animation="reveal-up" delay="0.1s" style={{ height: '280px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
          <img src="https://images.unsplash.com/photo-1585421514738-ee1a30a916b3?w=600&q=80&auto=format&fit=crop"
            alt="Cleaning Tools" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="sc-label">Cleaning Tools</div>
        </Reveal>
        <Reveal className="sc-img" animation="reveal-up" delay="0.2s" style={{ height: '280px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
          <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80&auto=format&fit=crop"
            alt="Waste Management" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="sc-label">Waste Management</div>
        </Reveal>
        <Reveal className="sc-img" animation="reveal-right" delay="0.3s" style={{ height: '280px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
          <img src="https://images.unsplash.com/photo-1584622781564-1d9876a13d00?w=600&q=80&auto=format&fit=crop"
            alt="Hygiene Products" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="sc-label">Hygiene Products</div>
        </Reveal>
      </div>
    </div>
  );
};

export default ShowcaseBand;
