import { useState, useEffect, useRef, useCallback } from 'react';
import { assetUrl } from '../utils/assetUrl';

const SLIDES = [
  { src: 'images/3way-stopcock.webp', tag: 'IV & INFUSION', name: '3-Way Stopcock', desc: 'Dispoway 360° — HMD & Hindustan Syringes' },
  { src: 'images/Alcohol-Swab.png', tag: 'WOUND CARE', name: 'Alcohol Swabs', desc: 'Dispocann — Isopropyl 70% v/v, 100 per box' },
  { src: 'images/Blades-and-Scalpel.jpg', tag: 'SURGICAL INSTRUMENTS', name: 'Scalpel & Blades', desc: 'TechnoCut — Sizes #10 #11 #15 #22 #23' },
  { src: 'images/blood-collection-tubes.webp', tag: 'DIAGNOSTICS', name: 'Blood Collection Tubes', desc: 'MB Vacuum K2 EDTA — 2ml & 3ml available' },
  { src: 'images/bp-monitor.png', tag: 'DIAGNOSTICS', name: 'BP Monitor', desc: 'Romsons — Digital Upper Arm, Auto Memory' },
  { src: 'images/cannulas.png', tag: 'IV & INFUSION', name: 'IV Cannulas', desc: 'All gauges — Grey 16G to Yellow 24G' },
  { src: 'images/Disinfectants.avif', tag: 'INFECTION CONTROL', name: 'Disinfectants', desc: 'Hospital-grade surface & skin antiseptics' },
  { src: 'images/disposal-box.png', tag: 'WASTE MANAGEMENT', name: 'Safety Disposal Box', desc: 'Kojak HMD — WHO Standard Sharps Container' },
  { src: 'images/Endotracheal tubes.jpg', tag: 'CRITICAL CARE', name: 'Endotracheal Tube', desc: 'Romsons Cuffed — Oral/Nasal, Size 10N' },
  { src: 'images/face-mask.jpg', tag: 'PPE & PROTECTION', name: '3-Ply Face Masks', desc: 'BFE 99% — Fluid Resistant, Box of 50' },
  { src: 'images/gloves.webp', tag: 'PPE & PROTECTION', name: 'Nitrile Gloves', desc: 'Romsons — Latex Free, Powder Free, All sizes' },
  { src: 'images/medical-tapes.avif', tag: 'WOUND CARE', name: 'Medical Tapes', desc: 'Surgical & micropore adhesive tapes' },
  { src: 'images/Nebulizer masks.webp', tag: 'RESPIRATORY', name: 'Nebulizer Mask Kit', desc: 'Adult & Paediatric — with tubing & cup' },
  { src: 'images/nebulizer.webp', tag: 'RESPIRATORY', name: 'Compressor Nebulizer', desc: 'Romsons — Quiet motor, 6L/min flow rate' },
  { src: 'images/needles.webp', tag: 'IV & INFUSION', name: 'Syringes & Needles', desc: 'HMD Dispovan Unolok — 1ml to 20ml sizes' },
  { src: 'images/Oxygen masks.webp', tag: 'RESPIRATORY', name: 'Oxygen Mask with Tubing', desc: 'Adult non-rebreather with 2m oxygen tubing' },
  { src: 'images/oxygen-concentrator.jpeg', tag: 'RESPIRATORY', name: 'Oxygen Concentrator', desc: 'Olex — 1–10 LPM, 93% purity, on wheels' },
  { src: 'images/ppe-kit.jpg', tag: 'PPE & PROTECTION', name: 'PPE Kit — Full Body', desc: 'Coverall + Goggles + Mask + Gloves + Shoe Cover' },
  { src: 'images/pulse-oximeter.webp', tag: 'DIAGNOSTICS', name: 'Pulse Oximeter', desc: 'Romsons — SpO2 & PR, OLED display' },
  { src: 'images/shoe-cover.jpg', tag: 'PPE & PROTECTION', name: 'Disposable Shoe Covers', desc: 'Waterproof PE — 100 pairs per pack' }
].map((slide) => ({ ...slide, src: assetUrl(slide.src) }));

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  const [transClass, setTransClass] = useState('');
  const [oldSlide, setOldSlide] = useState(null);
  const timerRef = useRef(null);

  const TRANSITIONS = ['slide-over', 'push', 'wipe', 'zoom'];
  const INTERVAL = 5000;
  const transIdxRef = useRef(0);
  const transitioningRef = useRef(false);

  const goTo = useCallback((nextIdx, isReverse = false) => {
    if (transitioningRef.current || nextIdx === current) return;
    
    transitioningRef.current = true;
    setOldSlide(current);
    let type = window.innerWidth < 768 ? 'slide-over' : TRANSITIONS[transIdxRef.current % TRANSITIONS.length];
    if (isReverse) {
      type = 'slide-over-reverse';
    }
    transIdxRef.current++;
    setTransClass(type);
    setCurrent(nextIdx);

    setTimeout(() => {
      setOldSlide(null);
      setTransClass('');
      transitioningRef.current = false;
    }, 900);
  }, [current, TRANSITIONS]);

  useEffect(() => {
    if (!transitioningRef.current) {
      timerRef.current = setInterval(() => {
        goTo((current + 1) % SLIDES.length);
      }, INTERVAL);
    }
    return () => clearInterval(timerRef.current);
  }, [current, goTo]);

  const currentDesc = SLIDES[current];

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      goTo((current + 1) % SLIDES.length, false);
    } else if (distance < -minSwipeDistance) {
      goTo((current - 1 + SLIDES.length) % SLIDES.length, true);
    }
  };

  const onMouseDown = (e) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e) => {
    if (touchStart !== null) {
      setTouchEnd(e.clientX);
    }
  };

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setTouchStart(null);
      return;
    }
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      goTo((current + 1) % SLIDES.length, false);
    } else if (distance < -minSwipeDistance) {
      goTo((current - 1 + SLIDES.length) % SLIDES.length, true);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const onMouseLeave = () => {
    if (touchStart !== null) {
      setTouchStart(null);
      setTouchEnd(null);
    }
  };

  return (
    <div 
      className="hero-slideshow" 
      id="heroSlideshow"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      style={{ touchAction: 'pan-y' }}
    >
      <div className="hs-track" id="hsTrack">
        {SLIDES.map((s, i) => {
          const isActive = i === current;
          const isOld = i === oldSlide;
          if (!isActive && !isOld) return null;
          
          let classes = 'hs-slide';
          if (isActive && !oldSlide) classes += ' active';
          if (isActive && oldSlide !== null) classes += ` enter-${transClass} active`;
          if (isOld) classes += ` exit-${transClass}`;

          return (
            <div key={i} className={classes} style={{ opacity: isActive || isOld ? 1 : 0 }}>
              <div className="hs-bg" style={{ backgroundImage: `url('${s.src}')` }}></div>
              <div className="hs-overlay"></div>
              <div className="hs-content">
                <span className="hs-tag">{s.tag}</span>
                <h3 className="hs-name">{s.name}</h3>
                <p className="hs-desc">{s.desc}</p>
                <a href="#contact" className="hs-enquire">Enquire Now →</a>
              </div>
            </div>
          );
        })}
      </div>



      <button className="hs-arrow hs-prev" aria-label="Previous" onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length, true)}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="hs-arrow hs-next" aria-label="Next" onClick={() => goTo((current + 1) % SLIDES.length, false)}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="hs-dots" id="hsDots">
        {SLIDES.map((_, i) => (
          <button key={i} aria-label={`Slide ${i + 1}`} className={`hs-dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i, i < current)}></button>
        ))}
      </div>

      <div className="hs-cat-badge" id="hsCatBadge" key={`badge-${current}`}>{currentDesc.tag}</div>

      <div className="hs-thumbs">
        {SLIDES.map((s, i) => {
          const diff = Math.abs(i - current);
          const show = diff <= 1 || (i === 0 && current === SLIDES.length - 1) || (i === SLIDES.length - 1 && current === 0);
          return (
            <div key={i} className={`hs-thumb ${i === current ? 'active' : ''}`} style={{ display: show ? 'block' : 'none' }} onClick={() => goTo(i)}>
              <img src={s.src} alt={s.name} loading="lazy" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSlideshow;
