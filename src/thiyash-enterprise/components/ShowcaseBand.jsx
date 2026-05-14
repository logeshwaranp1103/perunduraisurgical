import React from 'react';
import Reveal from './Reveal';

const ShowcaseBand = () => {
  return (
    <div className="showcase-band" style={{ padding: '40px 20px', background: '#f8fafc' }}>
      <div className="showcase-inner-4col">
        <Reveal className="sc-img" animation="reveal-left" style={{ height: '280px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
          <img src="public/thiyash/productstats/cleaning-chemicals.webp"
            alt="Cleaning Chemicals" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="sc-label">Cleaning Chemicals</div>
        </Reveal>
        <Reveal className="sc-img" animation="reveal-up" delay="0.1s" style={{ height: '280px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
          <img src="public/thiyash/productstats/cleaning-tools.png"
            alt="Cleaning Tools" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="sc-label">Cleaning Tools</div>
        </Reveal>
        <Reveal className="sc-img" animation="reveal-up" delay="0.2s" style={{ height: '280px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
          <img src="public/thiyash/banner/cleaning_liquids_cover.jpeg"
            alt="Laundry Care" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="sc-label">Laundry Care</div>
        </Reveal>
        <Reveal className="sc-img" animation="reveal-right" delay="0.3s" style={{ height: '280px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
          <img src="public/thiyash/productstats/hygiene-products.jpeg"
            alt="Hygiene Products" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="sc-label">Hygiene Products</div>
        </Reveal>
      </div>
    </div>
  );
};

export default ShowcaseBand;
