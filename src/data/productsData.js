// All product categories and their items
// Images use the same path convention as assetUrl() utility

export const categories = [
  { id: 'surgical', label: 'Surgical Instruments', banner: 'banner/surgicalinstrumentsbanner.jpg', description: 'Precision-engineered tools for modern surgical procedures.' },
  { id: 'wound',    label: 'Wound Care & Dressings',  banner: 'banner/woundbanner.jpg',               description: 'Professional solutions for wound management and skin protection.' },
  { id: 'iv',       label: 'IV & Infusion',            banner: 'banner/Vbanner.jpg',                   description: 'Critical care solutions for fluid delivery and venous access.' },
  { id: 'diag',     label: 'Diagnostic Supplies',      banner: 'banner/diabanner.jpg',                 description: 'Precise monitoring and screening tools for early detection.' },
  { id: 'ppe',      label: 'PPE & Protection',         banner: 'banner/ppebanner.jpg',                 description: 'Certified personal protective equipment for healthcare safety.' },
  { id: 'pharma',   label: 'Pharmaceutical Supply',    banner: 'banner/pharmbanner.jpg',               description: 'Authorized distributor of premium branded and generic medicines.' },
];

export const productsByCat = {
  surgical: [
    { id: 's1',  name: 'Allis Tissue Forceps',  description: 'Precision grip, reliable clamping',        image: 'Surgical instruments/Allis Tissue Forceps.jpg' },
    { id: 's2',  name: 'Mayo Scissors',          description: 'Straight & curved, tungsten carbide',      image: 'Surgical instruments/Mayo Scissors.jpg' },
    { id: 's3',  name: 'Scalpel & Blades',       description: 'Carbon steel and stainless steel',         image: 'Surgical instruments/Scalpel Blade.jpg' },
    { id: 's4',  name: 'Needle Holders',         description: 'Mayo-Hegar, secure grip jaws',             image: 'Surgical instruments/Mayo-Hegar Needle Holder.jpg' },
    { id: 's5',  name: 'Retractors',             description: 'Langenbeck, durable and precise',          image: 'Surgical instruments/Langenbeck Retractor.webp' },
    { id: 's6',  name: 'Hemostats',              description: 'Kocher and Mosquito clamps',               image: 'Surgical instruments/Kocher Forceps.jpg' },
    { id: 's7',  name: 'Babcock Forceps',        description: 'Atraumatic tissue grasping',               image: 'Surgical instruments/Babcock Forceps.jpg' },
    { id: 's8',  name: 'Bone Rongeur',           description: 'High strength orthopaedic tool',           image: 'Surgical instruments/Bone Rongeur.jpg' },
    { id: 's9',  name: 'Halsted Mosquito',       description: 'Fine surgical hemostat',                   image: 'Surgical instruments/Halsted Mosquito Clamp.jpg' },
    { id: 's10', name: 'Metzenbaum Scissors',    description: 'Delicate tissue dissection',               image: 'Surgical instruments/Metzenbaum Scissors.jpg' },
  ],
  wound: [
    { id: 'w1',  name: 'Steri-Strips',           description: 'Wound closure strips, hypoallergenic',    image: 'Wound care/Steri-Strip.jpg' },
    { id: 'w2',  name: 'Gauze Pads',             description: 'Sterile dressing, high absorbency',       image: 'Wound care/Sterile Gauze Pads.jpg' },
    { id: 'w3',  name: 'Film Dressings',         description: 'Tegaderm, waterproof transparent',        image: 'Wound care/Tegaderm Film Dressing.jpg' },
    { id: 'w4',  name: 'Crepe Bandages',         description: 'Elastic and firm support rolls',          image: 'Wound care/Crepe Bandage.webp' },
    { id: 'w5',  name: 'Antiseptics',            description: 'Povidone-Iodine & Chlorhexidine',         image: 'Wound care/Povidone-Iodine Solution.jpg' },
    { id: 'w6',  name: 'Hydrocolloid',           description: 'Exudate management, promotes healing',    image: 'Wound care/Hydrocolloid Dressing.jpg' },
    { id: 'w7',  name: 'Chlorhexidine',          description: 'Surgical skin preparation',               image: 'Wound care/Chlorhexidine Gluconate.jpg' },
    { id: 'w8',  name: 'Nylon Sutures',          description: 'Non-absorbable monofilament',             image: 'Wound care/Nylon Suture.jpg' },
    { id: 'w9',  name: 'Silver Sulfadiazine',    description: 'Topical burn therapy',                    image: 'Wound care/Silver Sulfadiazine Cream.webp' },
    { id: 'w10', name: 'Vicryl Sutures',         description: 'Synthetic absorbable braided',            image: 'Wound care/Vicryl Suture.jpeg' },
  ],
  iv: [
    { id: 'i1',  name: '3-Way Stopcocks',        description: 'Luer lock, 360° rotation, lipid resistant', image: 'IV infusion/Three-Way Stopcock.jpg' },
    { id: 'i2',  name: 'Burette Sets',           description: '110ml/150ml, micro drip (60 drops/ml)',   image: 'IV infusion/Burette Chamber Set.webp' },
    { id: 'i3',  name: 'Extension Lines',        description: 'Pressure monitoring, various lengths',    image: 'IV infusion/Extension Set Luer Lock.jpg' },
    { id: 'i4',  name: 'Syringes',               description: 'Unolok, Dispovan — 2ml to 50ml',          image: 'images/needles.webp' },
    { id: 'i5',  name: 'CVC Catheters',          description: 'Multi-lumen, polyurethane construction',  image: 'IV infusion/Central Venous Catheter.jpg' },
    { id: 'i6',  name: 'IV Cannulas',            description: 'With injection port & wings, all gauges', image: 'IV infusion/IV Cannula.jpg' },
    { id: 'i7',  name: 'Dextrose 5% (D5W)',      description: 'Intravenous energy source',               image: 'IV infusion/Dextrose-5-D5W.jpg' },
    { id: 'i8',  name: 'Normal Saline 0.9%',     description: 'Standard isotonic fluid',                 image: 'IV infusion/Normal-Saline-0-9.webp' },
    { id: 'i9',  name: "Ringer's Lactate",        description: 'Electrolyte replenishment',               image: "IV infusion/Ringer's Lactate.png" },
    { id: 'i10', name: 'Syringe Pump',           description: 'Controlled precision dosing',             image: 'IV infusion/Syringe Infusion Pump.webp' },
  ],
  diag: [
    { id: 'd1',  name: 'BP Monitors',            description: 'Digital & mercurial models available',    image: 'Diagnostic Supplies/Digital BP Monitor.jpg' },
    { id: 'd2',  name: 'Glucometers',            description: 'Accu-Chek, One Touch compatible',         image: 'Diagnostic Supplies/Glucometer.png' },
    { id: 'd3',  name: 'Pulse Oximeter',         description: 'OLED display, high accuracy sensor',      image: 'Diagnostic Supplies/Pulse Oximeter.jpg' },
    { id: 'd4',  name: 'Stethoscopes',           description: 'Littmann Cardiology & Classic types',     image: 'Diagnostic Supplies/Stethoscope.jpg' },
    { id: 'd5',  name: 'Urine Strips',           description: '10-parameter professional dipsticks',     image: 'Diagnostic Supplies/Urine Dipstick Strips.jpg' },
    { id: 'd6',  name: 'Thermometers',           description: 'Digital & Non-contact Infrared (NCIT)',   image: 'Diagnostic Supplies/Digital Thermometer.jpg' },
    { id: 'd7',  name: '12-Lead ECG',            description: 'Advanced cardiac tracking',               image: 'Diagnostic Supplies/12-Lead ECG Machine.webp' },
    { id: 'd8',  name: 'HemoCue Analyzer',       description: 'Point-of-care hemoglobin test',           image: 'Diagnostic Supplies/HemoCue Analyzer.jpg' },
    { id: 'd9',  name: 'Patient Monitor',        description: 'Multi-parameter signs tracking',          image: 'Diagnostic Supplies/Monitor.jpg' },
    { id: 'd10', name: 'Rapid Antigen Kit',      description: 'Fast infectious screening',               image: 'Diagnostic Supplies/Rapid Antigen Test Kit.avif' },
  ],
  ppe: [
    { id: 'p1',  name: 'Surgical Gloves',        description: 'Sterile latex, powder-free, assorted sizes', image: 'PPE/Sterile Latex Surgical Gloves.jpg' },
    { id: 'p2',  name: 'Surgical Masks',         description: 'Premium 3-ply, BFE >99% certification',  image: 'PPE/3-Ply Surgical Mask.jpg' },
    { id: 'p3',  name: 'Surgical Gowns',         description: 'SMS reinforced, AAMI Level 2 protection', image: 'PPE/Disposable Surgical Gown.jpg' },
    { id: 'p4',  name: 'Coverall Suits',         description: 'Tyvek material, fluid and viral barrier', image: 'PPE/Tyvek Coverall Suit.webp' },
    { id: 'p5',  name: 'Safety Goggles',         description: 'Anti-fog, indirect ventilation design',   image: 'PPE/safety-goggles.jpg' },
    { id: 'p6',  name: 'N95 Respirators',        description: 'NIOSH approved, high filtration safety',  image: 'PPE/N95 Respirator Mask.jpg' },
    { id: 'p7',  name: 'Lead Apron',             description: 'X-Ray radiation protection shield',       image: 'PPE/Lead Apron.jpg' },
    { id: 'p8',  name: 'Nitrile Gloves',         description: 'Latex-free examination strength',         image: 'PPE/Nitrile Examination Gloves.jpg' },
    { id: 'p9',  name: 'Shoe Covers',            description: 'Disposable sanitary floor protection',    image: 'PPE/Shoe Covers.jpg' },
    { id: 'p10', name: 'Surgical Bouffant',      description: 'Breathable non-woven head protection',    image: 'PPE/Surgical Bouffant.webp' },
  ],
  pharma: [
    { id: 'ph1', name: 'Antibiotics',            description: 'Augmentin, Azithromycin, Cephalexin',     image: 'Pharmaceutical/Amoxicillin-Clavulanate.webp' },
    { id: 'ph2', name: 'Analgesics',             description: 'Paracetamol, Diclofenac, Tramadol',       image: 'Pharmaceutical/Paracetamol Tablets.jpg' },
    { id: 'ph3', name: 'Injectables',            description: 'Vancomycin, Ondansetron, Midazolam',      image: 'Pharmaceutical/Vancomycin Injection.webp' },
    { id: 'ph4', name: 'Antidiabetics',          description: 'Metformin, Glibenclamide, Insulin',       image: 'Pharmaceutical/Metformin 500mg.jpg' },
    { id: 'ph5', name: 'Cardiovascular',         description: 'Atorvastatin, Amlodipine, Ramipril',      image: 'Pharmaceutical/Atorvastatin 20mg.webp' },
    { id: 'ph6', name: 'Gastrointestinal',       description: 'Omeprazole, Pantoprazole, Antacids',      image: 'Pharmaceutical/Omeprazole 20mg.jpeg' },
    { id: 'ph7', name: 'Epinephrine',            description: 'Anaphylaxis emergency care API',          image: 'Pharmaceutical/Epinephrine Injection.webp' },
    { id: 'ph8', name: 'Insulin Vials',          description: 'Diabetes glycemic control',               image: 'Pharmaceutical/Insulin Vials.webp' },
    { id: 'ph9', name: 'Morphine Sulphate',      description: 'Severe pain management',                  image: 'Pharmaceutical/Morphine Injection.jpg' },
    { id: 'ph10',name: 'Ondansetron 4mg',        description: 'Intravenous anti-nausea control',         image: 'Pharmaceutical/Ondansetron 4mg.jpg' },
  ],
};

// Flat list of all products (for the /products page grid — all categories combined)
export const allProducts = Object.entries(productsByCat).flatMap(([catId, items]) => {
  const cat = categories.find((c) => c.id === catId);
  return items.map((item) => ({ ...item, category: cat?.label || catId }));
});

// WhatsApp number
export const WHATSAPP_NUMBER = '919865271371';
