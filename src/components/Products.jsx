import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from './Reveal';
import { assetUrl } from '../utils/assetUrl';

const Products = () => {
  const [activeCat, setActiveCat] = useState('surgical');
  const navigate = useNavigate();

  useEffect(() => {
    const handleSelectCat = (e) => {
      if (e.detail) setActiveCat(e.detail);
    };
    window.addEventListener('selectProductCat', handleSelectCat);
    return () => window.removeEventListener('selectProductCat', handleSelectCat);
  }, []);

  // Clicking any product card navigates to the /products page
  const handleCardClick = (e) => {
    if (e.target.closest('.pg-card')) navigate('/products');
  };

  return (
    <>
      <section id="products" className="section">
        <Reveal className="s-head">
          <span className="s-tag">Product Categories</span>
          <h2 className="s-title">Comprehensive <em>Medical Supply</em> Range</h2>
          <p className="s-sub">Click any category to explore our full product list with specifications.</p>
        </Reveal>

        <div className="pcat-wrap">
          {/* LEFT: Category Cards */}
          <div className="pcat-grid">
            <div className={`pcat-card ${activeCat === 'surgical' ? 'active' : ''}`} onClick={() => setActiveCat('surgical')}>
              <div className="pcat-img p1"><img src={assetUrl('banner/surgicalinstrumentsbanner.jpg')} alt="Surgical" />
                <div className="prod-top-overlay"></div>
              </div>
              <div className="pcat-info">
                <h3>Surgical Instruments</h3>
                <p>OT-grade stainless steel tools</p>
              </div>
              <svg className="pcat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
            <div className={`pcat-card ${activeCat === 'wound' ? 'active' : ''}`} onClick={() => setActiveCat('wound')}>
              <div className="pcat-img p2"><img src={assetUrl('banner/woundbanner.jpg')} alt="Wound Care" />
                <div className="prod-top-overlay"></div>
              </div>
              <div className="pcat-info">
                <h3>Wound Care</h3>
                <p>Dressings, sutures &amp; antiseptics</p>
              </div>
              <svg className="pcat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
            <div className={`pcat-card ${activeCat === 'iv' ? 'active' : ''}`} onClick={() => setActiveCat('iv')}>
              <div className="pcat-img p3"><img src={assetUrl('banner/Vbanner.jpg')} alt="IV" />
                <div className="prod-top-overlay"></div>
              </div>
              <div className="pcat-info">
                <h3>IV &amp; Infusion</h3>
                <p>IV sets, fluids &amp; cannulas</p>
              </div>
              <svg className="pcat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
            <div className={`pcat-card ${activeCat === 'diag' ? 'active' : ''}`} onClick={() => setActiveCat('diag')}>
              <div className="pcat-img p4"><img src={assetUrl('banner/diabanner.jpg')} alt="Diagnostics" />
                <div className="prod-top-overlay"></div>
              </div>
              <div className="pcat-info">
                <h3>Diagnostic Supplies</h3>
                <p>Monitors, meters &amp; test kits</p>
              </div>
              <svg className="pcat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
            <div className={`pcat-card ${activeCat === 'ppe' ? 'active' : ''}`} onClick={() => setActiveCat('ppe')}>
              <div className="pcat-img p5"><img src={assetUrl('banner/ppebanner.jpg')} alt="PPE" />
                <div className="prod-top-overlay"></div>
              </div>
              <div className="pcat-info">
                <h3>PPE &amp; Protection</h3>
                <p>Gloves, masks &amp; gowns</p>
              </div>
              <svg className="pcat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
            <div className={`pcat-card ${activeCat === 'pharma' ? 'active' : ''}`} onClick={() => setActiveCat('pharma')}>
              <div className="pcat-img p6"><img src={assetUrl('banner/pharmbanner.jpg')} alt="Pharma" />
                <div className="prod-top-overlay"></div>
              </div>
              <div className="pcat-info">
                <h3>Pharmaceutical</h3>
                <p>OTC, Rx &amp; specialty drugs</p>
              </div>
              <svg className="pcat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>

          {/* RIGHT: Product Detail Panel */}
          <div className="pcat-panel">

            {/* SURGICAL INSTRUMENTS */}
            <div className={`pcat-detail ${activeCat === 'surgical' ? 'active' : ''}`} id="cat-surgical">
              <div className="pcd-header">
                <img src={assetUrl('banner/surgicalinstrumentsbanner.jpg')} alt="Surgical" />
                <div className="pcd-header-overlay">
                  <h2>Surgical Instruments</h2>
                  <p>Precision-engineered tools for modern surgical procedures.</p>
                </div>
              </div>
              <div className="pcd-body">
                <div className="prod-grid" onClick={handleCardClick}>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Surgical instruments/Allis Tissue Forceps.jpg')} alt="Forceps" /></div>
                    <div className="pg-info"><strong>Allis Tissue Forceps</strong><span>Precision grip, reliable clamping</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Surgical instruments/Mayo Scissors.jpg')} alt="Scissors" /></div>
                    <div className="pg-info"><strong>Mayo Scissors</strong><span>Straight &amp; curved, tungsten carbide</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Surgical instruments/Scalpel Blade.jpg')} alt="Handle" /></div>
                    <div className="pg-info"><strong>Scalpel &amp; Blades</strong><span>Carbon steel and stainless steel</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Surgical instruments/Mayo-Hegar Needle Holder.jpg')} alt="Holder" /></div>
                    <div className="pg-info"><strong>Needle Holders</strong><span>Mayo-Hegar, secure grip jaws</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Surgical instruments/Langenbeck Retractor.webp')} alt="Retractors" /></div>
                    <div className="pg-info"><strong>Retractors</strong><span>Langenbeck, durable and precise</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Surgical instruments/Kocher Forceps.jpg')} alt="Hemostats" /></div>
                    <div className="pg-info"><strong>Hemostats</strong><span>Kocher and Mosquito clamps</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Surgical instruments/Babcock Forceps.jpg')} alt="Babcock" /></div>
                    <div className="pg-info"><strong>Babcock Forceps</strong><span>Atraumatic tissue grasping</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Surgical instruments/Bone Rongeur.jpg')} alt="Rongeur" /></div>
                    <div className="pg-info"><strong>Bone Rongeur</strong><span>High strength orthopaedic tool</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Surgical instruments/Halsted Mosquito Clamp.jpg')} alt="Mosquito" /></div>
                    <div className="pg-info"><strong>Halsted Mosquito</strong><span>Fine surgical hemostat</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Surgical instruments/Metzenbaum Scissors.jpg')} alt="Metzenbaum" /></div>
                    <div className="pg-info"><strong>Metzenbaum Scissors</strong><span>Delicate tissue dissection</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Surgical instruments/Allis Tissue Forceps.jpg')} alt="Forceps" /></div>
                    <div className="pg-info"><strong>Allis Tissue Forceps</strong><span>Precision grip, reliable clamping</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Surgical instruments/Mayo Scissors.jpg')} alt="Scissors" /></div>
                    <div className="pg-info"><strong>Mayo Scissors</strong><span>Straight &amp; curved, tungsten carbide</span></div>
                  </div>
                </div>
                <a href="https://wa.me/919865271371?text=Hello%2C%20I%20need%20a%20quote%20for%20Surgical%20Instruments."
                  target="_blank" rel="noreferrer" className="pcd-enquire">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            {/* WOUND CARE */}
            <div className={`pcat-detail ${activeCat === 'wound' ? 'active' : ''}`} id="cat-wound">
              <div className="pcd-header">
                <img src={assetUrl('banner/woundbanner.jpg')} alt="Wound Care" />
                <div className="pcd-header-overlay">
                  <h2>Wound Care &amp; Dressings</h2>
                  <p>Professional solutions for wound management and skin protection.</p>
                </div>
              </div>
              <div className="pcd-body">
                <div className="prod-grid" onClick={handleCardClick}>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Wound care/Steri-Strip.jpg')} alt="Steri Strip" /></div>
                    <div className="pg-info"><strong>Steri-Strips</strong><span>Wound closure strips, hypoallergenic</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Wound care/Sterile Gauze Pads.jpg')} alt="Gauze" /></div>
                    <div className="pg-info"><strong>Gauze Pads</strong><span>Sterile dressing, high absorbency</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Wound care/Tegaderm Film Dressing.jpg')} alt="Dressing" /></div>
                    <div className="pg-info"><strong>Film Dressings</strong><span>Tegaderm, waterproof transparent</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Wound care/Crepe Bandage.webp')} alt="Pad" /></div>
                    <div className="pg-info"><strong>Crepe Bandages</strong><span>Elastic and firm support rolls</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Wound care/Povidone-Iodine Solution.jpg')} alt="Tape" /></div>
                    <div className="pg-info"><strong>Antiseptics</strong><span>Povidone-Iodine &amp; Chlorhexidine</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Wound care/Hydrocolloid Dressing.jpg')} alt="Hydrocolloid" /></div>
                    <div className="pg-info"><strong>Hydrocolloid</strong><span>Exudate management, promotes healing</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Wound care/Chlorhexidine Gluconate.jpg')} alt="Chlorhexidine" /></div>
                    <div className="pg-info"><strong>Chlorhexidine</strong><span>Surgical skin preparation</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Wound care/Nylon Suture.jpg')} alt="Suture" /></div>
                    <div className="pg-info"><strong>Nylon Sutures</strong><span>Non-absorbable monofilament</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Wound care/Silver Sulfadiazine Cream.webp')} alt="Cream" /></div>
                    <div className="pg-info"><strong>Silver Sulfadiazine</strong><span>Topical burn therapy</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Wound care/Vicryl Suture.jpeg')} alt="Vicryl" /></div>
                    <div className="pg-info"><strong>Vicryl Sutures</strong><span>Synthetic absorbable braided</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Wound care/Steri-Strip.jpg')} alt="Steri Strip" /></div>
                    <div className="pg-info"><strong>Steri-Strips</strong><span>Wound closure strips, hypoallergenic</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Wound care/Sterile Gauze Pads.jpg')} alt="Gauze" /></div>
                    <div className="pg-info"><strong>Gauze Pads</strong><span>Sterile dressing, high absorbency</span></div>
                  </div>
                </div>
                <a href="https://wa.me/919865271371?text=Hello%2C%20I%20need%20a%20quote%20for%20Wound%20Care%20products."
                  target="_blank" rel="noreferrer" className="pcd-enquire">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            {/* IV & INFUSION */}
            <div className={`pcat-detail ${activeCat === 'iv' ? 'active' : ''}`} id="cat-iv">
              <div className="pcd-header">
                <img src={assetUrl('banner/Vbanner.jpg')} alt="IV" />
                <div className="pcd-header-overlay">
                  <h2>IV &amp; Infusion</h2>
                  <p>Critical care solutions for fluid delivery and venous access.</p>
                </div>
              </div>
              <div className="pcd-body">
                <div className="prod-grid" onClick={handleCardClick}>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('IV infusion/Three-Way Stopcock.jpg')} alt="Stopcock" /></div>
                    <div className="pg-info"><strong>3-Way Stopcocks</strong><span>Luer lock, 360° rotation, lipid resistant</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('IV infusion/Burette Chamber Set.webp')} alt="Burette" /></div>
                    <div className="pg-info"><strong>Burette Sets</strong><span>110ml/150ml, micro drip (60 drops/ml)</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('IV infusion/Extension Set Luer Lock.jpg')} alt="Extension" /></div>
                    <div className="pg-info"><strong>Extension Lines</strong><span>Pressure monitoring, various lengths</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('images/needles.webp')} alt="Syringes" /></div>
                    <div className="pg-info"><strong>Syringes</strong><span>Unolok, Dispovan — 2ml to 50ml</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('IV infusion/Central Venous Catheter.jpg')} alt="Catheter" /></div>
                    <div className="pg-info"><strong>CVC Catheters</strong><span>Multi-lumen, polyurethane construction</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('IV infusion/IV Cannula.jpg')} alt="Cannula" /></div>
                    <div className="pg-info"><strong>IV Cannulas</strong><span>With injection port &amp; wings, all gauges</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('IV infusion/Dextrose-5-D5W.jpg')} alt="D5W" /></div>
                    <div className="pg-info"><strong>Dextrose 5% (D5W)</strong><span>Intravenous energy source</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('IV infusion/Normal-Saline-0-9.webp')} alt="Saline" /></div>
                    <div className="pg-info"><strong>Normal Saline 0.9%</strong><span>Standard isotonic fluid</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl("IV infusion/Ringer's Lactate.png")} alt="Ringer" /></div>
                    <div className="pg-info"><strong>Ringer's Lactate</strong><span>Electrolyte replenishment</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('IV infusion/Syringe Infusion Pump.webp')} alt="Pump" /></div>
                    <div className="pg-info"><strong>Syringe Pump</strong><span>Controlled precision dosing</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('IV infusion/Three-Way Stopcock.jpg')} alt="Stopcock" /></div>
                    <div className="pg-info"><strong>3-Way Stopcocks</strong><span>Luer lock, 360° rotation, lipid resistant</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('IV infusion/Burette Chamber Set.webp')} alt="Burette" /></div>
                    <div className="pg-info"><strong>Burette Sets</strong><span>110ml/150ml, micro drip (60 drops/ml)</span></div>
                  </div>
                </div>
                <a href="https://wa.me/919865271371?text=Hello%2C%20I%20need%20a%20quote%20for%20IV%20and%20Infusion%20products."
                  target="_blank" rel="noreferrer" className="pcd-enquire">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            {/* DIAGNOSTICS */}
            <div className={`pcat-detail ${activeCat === 'diag' ? 'active' : ''}`} id="cat-diag">
              <div className="pcd-header">
                <img src={assetUrl('banner/diabanner.jpg')} alt="Diagnostics" />
                <div className="pcd-header-overlay">
                  <h2>Diagnostic Supplies</h2>
                  <p>Precise monitoring and screening tools for early detection.</p>
                </div>
              </div>
              <div className="pcd-body">
                <div className="prod-grid" onClick={handleCardClick}>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Diagnostic Supplies/Digital BP Monitor.jpg')} alt="BP" /></div>
                    <div className="pg-info"><strong>BP Monitors</strong><span>Digital &amp; mercurial models available</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Diagnostic Supplies/Glucometer.png')} alt="Gluco" /></div>
                    <div className="pg-info"><strong>Glucometers</strong><span>Accu-Chek, One Touch compatible</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Diagnostic Supplies/Pulse Oximeter.jpg')} alt="SPO2" /></div>
                    <div className="pg-info"><strong>Pulse Oximeter</strong><span>OLED display, high accuracy sensor</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Diagnostic Supplies/Stethoscope.jpg')} alt="Littmann" /></div>
                    <div className="pg-info"><strong>Stethoscopes</strong><span>Littmann Cardiology &amp; Classic types</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Diagnostic Supplies/Urine Dipstick Strips.jpg')} alt="Urine" /></div>
                    <div className="pg-info"><strong>Urine Strips</strong><span>10-parameter professional dipsticks</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Diagnostic Supplies/Digital Thermometer.jpg')} alt="Temp" /></div>
                    <div className="pg-info"><strong>Thermometers</strong><span>Digital &amp; Non-contact Infrared (NCIT)</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Diagnostic Supplies/12-Lead ECG Machine.webp')} alt="ECG" /></div>
                    <div className="pg-info"><strong>12-Lead ECG</strong><span>Advanced cardiac tracking</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Diagnostic Supplies/HemoCue Analyzer.jpg')} alt="HemoCue" /></div>
                    <div className="pg-info"><strong>HemoCue Analyzer</strong><span>Point-of-care hemoglobin test</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Diagnostic Supplies/Monitor.jpg')} alt="Monitor" /></div>
                    <div className="pg-info"><strong>Patient Monitor</strong><span>Multi-parameter signs tracking</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Diagnostic Supplies/Rapid Antigen Test Kit.avif')} alt="Antigen" /></div>
                    <div className="pg-info"><strong>Rapid Antigen Kit</strong><span>Fast infectious screening</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Diagnostic Supplies/Digital BP Monitor.jpg')} alt="BP" /></div>
                    <div className="pg-info"><strong>BP Monitors</strong><span>Digital &amp; mercurial models available</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Diagnostic Supplies/Glucometer.png')} alt="Gluco" /></div>
                    <div className="pg-info"><strong>Glucometers</strong><span>Accu-Chek, One Touch compatible</span></div>
                  </div>
                </div>
                <a href="https://wa.me/919865271371?text=Hello%2C%20I%20need%20a%20quote%20for%20Diagnostic%20Supplies."
                  target="_blank" rel="noreferrer" className="pcd-enquire">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            {/* PPE & PROTECTION */}
            <div className={`pcat-detail ${activeCat === 'ppe' ? 'active' : ''}`} id="cat-ppe">
              <div className="pcd-header">
                <img src={assetUrl('banner/ppebanner.jpg')} alt="PPE" />
                <div className="pcd-header-overlay">
                  <h2>PPE &amp; Protection</h2>
                  <p>Certified personal protective equipment for healthcare safety.</p>
                </div>
              </div>
              <div className="pcd-body">
                <div className="prod-grid" onClick={handleCardClick}>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('PPE/Sterile Latex Surgical Gloves.jpg')} alt="Gloves" /></div>
                    <div className="pg-info"><strong>Surgical Gloves</strong><span>Sterile latex, powder-free, assorted sizes</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('PPE/3-Ply Surgical Mask.jpg')} alt="Masks" /></div>
                    <div className="pg-info"><strong>Surgical Masks</strong><span>Premium 3-ply, BFE &gt;99% certification</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('PPE/Disposable Surgical Gown.jpg')} alt="Gowns" /></div>
                    <div className="pg-info"><strong>Surgical Gowns</strong><span>SMS reinforced, AAMI Level 2 protection</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('PPE/Tyvek Coverall Suit.webp')} alt="Coverall" /></div>
                    <div className="pg-info"><strong>Coverall Suits</strong><span>Tyvek material, fluid and viral barrier</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('PPE/safety-goggles.jpg')} alt="Goggles" /></div>
                    <div className="pg-info"><strong>Safety Goggles</strong><span>Anti-fog, indirect ventilation design</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('PPE/N95 Respirator Mask.jpg')} alt="N95" /></div>
                    <div className="pg-info"><strong>N95 Respirators</strong><span>NIOSH approved, high filtration safety</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('PPE/Lead Apron.jpg')} alt="Apron" /></div>
                    <div className="pg-info"><strong>Lead Apron</strong><span>X-Ray radiation protection shield</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('PPE/Nitrile Examination Gloves.jpg')} alt="Nitrile" /></div>
                    <div className="pg-info"><strong>Nitrile Gloves</strong><span>Latex-free examination strength</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('PPE/Shoe Covers.jpg')} alt="Shoe Covers" /></div>
                    <div className="pg-info"><strong>Shoe Covers</strong><span>Disposable sanitary floor protection</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('PPE/Surgical Bouffant.webp')} alt="Bouffant" /></div>
                    <div className="pg-info"><strong>Surgical Bouffant</strong><span>Breathable non-woven head protection</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('PPE/Sterile Latex Surgical Gloves.jpg')} alt="Gloves" /></div>
                    <div className="pg-info"><strong>Surgical Gloves</strong><span>Sterile latex, powder-free, assorted sizes</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('PPE/3-Ply Surgical Mask.jpg')} alt="Masks" /></div>
                    <div className="pg-info"><strong>Surgical Masks</strong><span>Premium 3-ply, BFE &gt;99% certification</span></div>
                  </div>
                </div>
                <a href="https://wa.me/919865271371?text=Hello%2C%20I%20need%20a%20quote%20for%20PPE%20and%20Protection%20products."
                  target="_blank" rel="noreferrer" className="pcd-enquire">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            {/* PHARMACEUTICAL */}
            <div className={`pcat-detail ${activeCat === 'pharma' ? 'active' : ''}`} id="cat-pharma">
              <div className="pcd-header">
                <img src={assetUrl('banner/pharmbanner.jpg')} alt="Pharma" />
                <div className="pcd-header-overlay">
                  <h2>Pharmaceutical Supply</h2>
                  <p>Authorized distributor of premium branded and generic medicines.</p>
                </div>
              </div>
              <div className="pcd-body">
                <div className="prod-grid" onClick={handleCardClick}>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Pharmaceutical/Amoxicillin-Clavulanate.webp')} alt="Antibiotics" /></div>
                    <div className="pg-info"><strong>Antibiotics</strong><span>Augmentin, Azithromycin, Cephalexin</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Pharmaceutical/Paracetamol Tablets.jpg')} alt="Analgesics" /></div>
                    <div className="pg-info"><strong>Analgesics</strong><span>Paracetamol, Diclofenac, Tramadol</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Pharmaceutical/Vancomycin Injection.webp')} alt="Vitamins" /></div>
                    <div className="pg-info"><strong>Injectables</strong><span>Vancomycin, Ondansetron, Midazolam</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Pharmaceutical/Metformin 500mg.jpg')} alt="Diabetes" /></div>
                    <div className="pg-info"><strong>Antidiabetics</strong><span>Metformin, Glibenclamide, Insulin</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Pharmaceutical/Atorvastatin 20mg.webp')} alt="BP" /></div>
                    <div className="pg-info"><strong>Cardiovascular</strong><span>Atorvastatin, Amlodipine, Ramipril</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Pharmaceutical/Omeprazole 20mg.jpeg')} alt="GI" /></div>
                    <div className="pg-info"><strong>Gastrointestinal</strong><span>Omeprazole, Pantoprazole, Antacids</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Pharmaceutical/Epinephrine Injection.webp')} alt="Epinephrine" /></div>
                    <div className="pg-info"><strong>Epinephrine</strong><span>Anaphylaxis emergency care API</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Pharmaceutical/Insulin Vials.webp')} alt="Insulin" /></div>
                    <div className="pg-info"><strong>Insulin Vials</strong><span>Diabetes glycemic control</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Pharmaceutical/Morphine Injection.jpg')} alt="Morphine" /></div>
                    <div className="pg-info"><strong>Morphine Sulphate</strong><span>Severe pain management</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Pharmaceutical/Ondansetron 4mg.jpg')} alt="Ondansetron" /></div>
                    <div className="pg-info"><strong>Ondansetron 4mg</strong><span>Intravenous anti-nausea control</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Pharmaceutical/Amoxicillin-Clavulanate.webp')} alt="Antibiotics" /></div>
                    <div className="pg-info"><strong>Antibiotics</strong><span>Augmentin, Azithromycin, Cephalexin</span></div>
                  </div>
                  <div className="pg-card">
                    <div className="pg-img"><img src={assetUrl('Pharmaceutical/Paracetamol Tablets.jpg')} alt="Analgesics" /></div>
                    <div className="pg-info"><strong>Analgesics</strong><span>Paracetamol, Diclofenac, Tramadol</span></div>
                  </div>
                </div>
                <a href="https://wa.me/919865271371?text=Hello%2C%20I%20need%20a%20quote%20for%20Pharmaceutical%20products."
                  target="_blank" rel="noreferrer" className="pcd-enquire">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
