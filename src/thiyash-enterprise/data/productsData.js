import { assetUrl } from '../utils/assetUrl';

export const categories = [
  {
    id: 'chemicals',
    title: 'Cleaning Chemicals',
    sub: 'Floor, surface & washroom cleaners',
    banner: 'public/thiyash/banner/chemical_cover.jpg',
    description: 'Professional cleaning solutions for maintaining hygiene and spotless spaces.'
  },
  {
    id: 'hygiene',
    title: 'Hygiene-Sanitization',
    sub: 'Detergents, fabric care & stain removal',
    banner: 'public/thiyash/banner/sanitizer_cover.jpg',
    description: 'Advanced hygiene products designed to ensure germ-free environments.'
  },
  {
    id: 'laundry',
    title: 'Laundry Care',
    sub: 'Detergents, fabric care & stain removal',
    banner: 'public/thiyash/banner/cleaning_liquids_cover.jpeg',
    description: 'Complete laundry solutions for freshness, fabric protection, and deep cleaning.'
  },
  {
    id: 'tools',
    title: 'Cleaning Tools',
    sub: 'Mops, brushes & cleaning accessories',
    banner: 'public/thiyash/banner/cleaningtools_cover.jpg',
    description: 'Durable tools and equipment for efficient everyday cleaning operations.'
  },

];

export const productsByCat = {
  chemicals: [
    { name: 'Floor Cleaner', desc: 'Pine scented germicidal floor cleaner', img: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=300' },
    { name: 'Glass Cleaner', desc: 'Streak-free window and glass formula', img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300' },
    { name: 'Toilet Bowl Cleaner', desc: 'Heavy duty limescale remover', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300' }
  ],
  hygiene: [
    { name: 'Hand Sanitizer', desc: '70% Alcohol based instant hand sanitizer', img: assetUrl('thiyash/hygiene-sanitization/sanitizer.jpg') },
    { name: 'Surface Sanitizer', desc: 'Powerful disinfectant for all surfaces', img: assetUrl('thiyash/hygiene-sanitization/surface-sanitizer.jpg') },
    { name: 'Disinfectant Spray', desc: 'Multi-surface germ protection spray', img: assetUrl('thiyash/hygiene-sanitization/disinfectant-spray.avif') },
    { name: 'Room Spray', desc: 'Long-lasting refreshing room fragrance', img: assetUrl('thiyash/hygiene-sanitization/room-spray.jpeg') },
    { name: 'Hand Paper Towels', desc: 'Premium 2-ply multifold towels', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300' },
    { name: 'Toilet Tissue Rolls', desc: 'Bulk pack 2-ply soft toilet rolls', img: 'https://images.unsplash.com/photo-1584556326561-8b4f8d2b7d54?w=300' },
    { name: 'Paper Napkins', desc: 'White beverage and dinner napkins', img: assetUrl('thiyash/hygiene-sanitization/paper-napkin.webp') },
    { name: 'T-Roll Dispenser', desc: 'Lockable wall-mounted dispenser', img: 'https://images.unsplash.com/photo-1583907583921-17f4291800ce?w=400&q=80&auto=format&fit=crop' },
    { name: 'Rubber Gloves', desc: 'Heavy duty reusable cleaning gloves', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300' },
    { name: 'Work Aprons', desc: 'Waterproof PVC heavy duty apron', img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=300' }
  ],
  laundry: [
    { name: 'Liquid Detergent', desc: 'High-performance laundry cleaning liquid', img: assetUrl('thiyash/laundry-care/Liquid Detergen.jpeg') },
    { name: 'Fabric Softener', desc: 'Makes clothes soft and fragrant', img: assetUrl('thiyash/laundry-care/Fabric Softener.jpeg') },
    { name: 'Linen Conditioner', desc: 'Premium care for hospitality linen', img: assetUrl('thiyash/laundry-care/Linen Conditioner.jpeg') },
    { name: 'Stain Remover', desc: 'Tough on stains, gentle on fabric', img: assetUrl('thiyash/laundry-care/Stain Remover.jpeg') },
    { name: 'Laundry Bags', desc: 'Durable nylon laundry collection bags', img: assetUrl('thiyash/laundry-care/Laundry Bags.jpeg') }
  ],
  tools: [
    { name: 'Cotton Wet Mop', desc: 'Heavy duty loop end industrial mop', img: assetUrl('thiyash/cleaning-tools/mop.jpg') },
    { name: 'Floor Wiper', desc: 'Streak-free professional floor squeegee', img: assetUrl('thiyash/cleaning-tools/floor wiper.jpg') },
    { name: 'Soft Broom', desc: 'High-quality grass broom for indoor cleaning', img: assetUrl('thiyash/cleaning-tools/broom.jpg') },
    { name: 'Floor Scrubber', desc: 'Heavy duty scrubbing brush for tough stains', img: assetUrl('thiyash/cleaning-tools/sruber.jpg') },
    { name: 'Cleaning Bucket', desc: '13L HDPE durable cleaning bucket', img: assetUrl('thiyash/cleaning-tools/plastic-13l-blue-hdpe-home-water-bucket-888.jpg') },
    { name: 'Pedal Bin', desc: 'Hands-free plastic pedal dustbin', img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&q=80&auto=format&fit=crop' },
    { name: 'Garbage Bags', desc: 'Heavy duty black trash bags', img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&q=80&auto=format&fit=crop' }
  ],


};
