import React from 'react';
import Reveal from './Reveal';
import { assetUrl } from '../utils/assetUrl';

const ShowcaseBand = () => {
  return (
    <section className="showcase-band">
      <div className="showcase-inner">
        <Reveal className="sc-img" animation="reveal-left" delay="0.1s">
          <img src={assetUrl('thiyash/productstats/cleaning-chemicals.webp')} 
            alt="Cleaning Chemicals" loading="lazy" />
          <div className="sc-label">Cleaning Chemicals</div>
        </Reveal>
        <div className="sc-col">
          <Reveal className="sc-img sc-short" animation="reveal-up" delay="0.15s">
            <img src={assetUrl('thiyash/productstats/cleaning-tools.png')} 
              alt="Cleaning Tools" loading="lazy" />
            <div className="sc-label">Cleaning Tools</div>
          </Reveal>
          <Reveal className="sc-img sc-short" animation="reveal-up" delay="0.2s">
            <img src={assetUrl('thiyash/banner/cleaning_liquids_cover.jpeg')} 
              alt="Laundry Care" loading="lazy" />
            <div className="sc-label">Laundry Care</div>
          </Reveal>
        </div>
        <Reveal className="sc-img" animation="reveal-right" delay="0.3s">
          <img src={assetUrl('thiyash/productstats/hygiene-products.jpeg')} 
            alt="Hygiene Products" loading="lazy" />
          <div className="sc-label">Hygiene Products</div>
        </Reveal>
      </div>
    </section>
  );
};

export default ShowcaseBand;
