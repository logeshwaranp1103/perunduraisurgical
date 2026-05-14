import { assetUrl } from '../utils/assetUrl';

export const categories = [
  {
    id: 'chemicals',
    title: 'Cleaning Chemicals',
    sub: 'Floor, surface & washroom cleaners',
    banner: 'https://images.unsplash.com/photo-1581578731522-aa7c0411d7f6?w=1200&q=80&auto=format&fit=crop',
    description: 'Professional cleaning solutions for maintaining hygiene and spotless spaces.'
  },
  {
    id: 'hygiene',
    title: 'Hygiene-Sanitization',
    sub: 'Detergents, fabric care & stain removal',
    banner: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80&auto=format&fit=crop',
    description: 'Advanced hygiene products designed to ensure germ-free environments.'
  },
  {
    id: 'laundry',
    title: 'Laundry Care',
    sub: 'Detergents, fabric care & stain removal',
    banner: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&q=80&auto=format&fit=crop',
    description: 'Complete laundry solutions for freshness, fabric protection, and deep cleaning.'
  },
  {
    id: 'tools',
    title: 'Cleaning Tools',
    sub: 'Mops, brushes & cleaning accessories',
    banner: 'https://images.unsplash.com/photo-1528740561666-dc2479da08ad?w=1200&q=80&auto=format&fit=crop',
    description: 'Durable tools and equipment for efficient everyday cleaning operations.'
  },
  {
    id: 'paper',
    title: 'Paper & Tissue',
    sub: 'Tissues, wipes & disposable paper',
    banner: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?w=1200&q=80&auto=format&fit=crop',
    description: 'High-quality disposable essentials for hygiene, hospitality, and commercial use.'
  },
  {
    id: 'safety',
    title: 'Safety & Utility',
    sub: 'Protective gear & utility essentials',
    banner: 'https://images.unsplash.com/photo-1583907583921-17f4291800ce?w=1200&q=80&auto=format&fit=crop',
    description: 'Safety and utility products designed for secure and efficient workplaces.'
  }
];

export const productsByCat = {
  chemicals: [
    { name: 'Floor Cleaner 5L', desc: 'Pine scented germicidal floor cleaner', img: 'https://images.unsplash.com/photo-1581578731522-aa7c0411d7f6?w=400&q=80&auto=format&fit=crop' },
    { name: 'Glass Cleaner 5L', desc: 'Streak-free window and glass formula', img: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&q=80&auto=format&fit=crop' },
    { name: 'Toilet Bowl Cleaner', desc: 'Heavy duty limescale remover', img: 'https://images.unsplash.com/photo-1584622781564-24ffca6a15ea?w=400&q=80&auto=format&fit=crop' },
    { name: 'Hand Wash Liquid 5L', desc: 'Moisturizing antibacterial hand wash', img: 'https://images.unsplash.com/photo-1590611380053-1af523713f04?w=400&q=80&auto=format&fit=crop' }
  ],
  hygiene: [
    { name: 'Cotton Wet Mop', desc: 'Heavy duty loop end cotton mop', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80&auto=format&fit=crop' },
    { name: 'Microfiber Dry Mop', desc: 'Dust control microfiber floor mop', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80&auto=format&fit=crop' },
    { name: 'Soft Broom', desc: 'Premium grass soft broom for indoors', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80&auto=format&fit=crop' },
    { name: 'Hard Broom', desc: 'Nylon bristle outdoor broom', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80&auto=format&fit=crop' }
  ],
  laundry: [
    { name: 'Pedal Bin 60L', desc: 'Hands-free plastic pedal dustbin', img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&q=80&auto=format&fit=crop' },
    { name: 'Garbage Bags Large', desc: '100 pieces heavy duty black trash bags', img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&q=80&auto=format&fit=crop' },
    { name: 'Sharps Container', desc: 'Medical grade sharps disposal unit', img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&q=80&auto=format&fit=crop' },
    { name: 'Recycling Station', desc: 'Color-coded waste separation unit', img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&q=80&auto=format&fit=crop' }
  ],
  tools: [
    { name: 'Window Squeegee', desc: 'Professional streak-free window tool', img: 'https://images.unsplash.com/photo-1528740561666-dc2479da08ad?w=400&q=80&auto=format&fit=crop' },
    { name: 'Floor Scrubber', desc: 'Heavy duty deck scrubbing brush', img: 'https://images.unsplash.com/photo-1528740561666-dc2479da08ad?w=400&q=80&auto=format&fit=crop' },
    { name: 'Microfiber Cloths', desc: 'Pack of 10 color-coded cloths', img: 'https://images.unsplash.com/photo-1528740561666-dc2479da08ad?w=400&q=80&auto=format&fit=crop' },
    { name: 'Spray Bottles', desc: 'Industrial grade dilution bottles', img: 'https://images.unsplash.com/photo-1528740561666-dc2479da08ad?w=400&q=80&auto=format&fit=crop' }
  ],
  paper: [
    { name: 'Hand Paper Towels', desc: 'Premium 2-ply multifold towels', img: 'https://images.unsplash.com/photo-1583907583921-17f4291800ce?w=400&q=80&auto=format&fit=crop' },
    { name: 'Toilet Tissue Rolls', desc: 'Bulk pack 2-ply soft toilet rolls', img: 'https://images.unsplash.com/photo-1583907583921-17f4291800ce?w=400&q=80&auto=format&fit=crop' },
    { name: 'Paper Napkins', desc: 'White beverage and dinner napkins', img: 'https://images.unsplash.com/photo-1583907583921-17f4291800ce?w=400&q=80&auto=format&fit=crop' },
    { name: 'T-Roll Dispenser', desc: 'Lockable wall-mounted dispenser', img: 'https://images.unsplash.com/photo-1583907583921-17f4291800ce?w=400&q=80&auto=format&fit=crop' }
  ],
  safety: [
    { name: 'Rubber Gloves', desc: 'Heavy duty reusable cleaning gloves', img: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?w=400&q=80&auto=format&fit=crop' },
    { name: 'Safety Vest', desc: 'High-visibility reflective work vest', img: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?w=400&q=80&auto=format&fit=crop' },
    { name: 'Face Shields', desc: 'Anti-splash protective face shield', img: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?w=400&q=80&auto=format&fit=crop' },
    { name: 'Work Aprons', desc: 'Waterproof PVC heavy duty apron', img: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?w=400&q=80&auto=format&fit=crop' }
  ]
};
