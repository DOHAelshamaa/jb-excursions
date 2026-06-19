// ─── Image imports (Vite resolves these at build time) ────────────────────────
import boatTours     from '../assets/images/boatTours.jpg';
import boatTours1    from '../assets/images/boatTours1.jpg';
import boatTours2    from '../assets/images/boatTours2.jpg';
import boatTours3    from '../assets/images/boatTours3.jpg';
import boatTours4    from '../assets/images/boatTours4.jpg';
import boatTours5    from '../assets/images/boatTours5.jpg';
import baloonRides   from '../assets/images/baloonRides.jpg';
import baloonRides1  from '../assets/images/baloonRides1.jpg';
import sunsetMagic   from '../assets/images/sunsetMagic.jpg';
import sunsetMagic1  from '../assets/images/sunsetMagic1.jpg';
import sunsetMagic2  from '../assets/images/sunsetMagic2.jpg';
import sunsetMagic3  from '../assets/images/sunsetMagic3.jpg';
import gallery       from '../assets/images/gallery.jpg';
import gallery1      from '../assets/images/gallery1.jpg';
import photo7        from '../assets/images/photo_7_2026-06-08_00-19-51.jpg';
import photo8        from '../assets/images/photo_8_2026-06-08_00-19-51.jpg';
import photo10       from '../assets/images/photo_10_2026-06-08_00-19-51.jpg';
import photo11       from '../assets/images/photo_11_2026-06-08_00-19-51.jpg';
import photo13       from '../assets/images/photo_13_2026-06-08_00-19-51.jpg';
import photo14       from '../assets/images/photo_14_2026-06-08_00-19-51.jpg';
import photo18       from '../assets/images/photo_18_2026-06-08_00-19-51.jpg';
import photo24       from '../assets/images/photo_24_2026-06-08_00-19-51.jpg';
import aboutImg      from '../assets/images/Gemini_Generated_Image_x4lmbex4lmbex4lm.png';

// ─── Business Info ────────────────────────────────────────────────────────────
export const BUSINESS = {
  name: 'J & B Excursions',
  tagline: 'Luxury maritime and aerial exploration for the discerning traveler.',
  whatsapp: 'https://wa.me/201008318894',
  phone: '+20 10 08318894',
  phoneHref: 'tel:+201008318894',
  location: 'In front of Winter Palace Hotel, Luxor, Egypt',
  instagram: 'https://www.instagram.com/bobo.bahaa.963?igsh=OTZnaWNlYzRocHE=',
  instagramHandle: '@bobo.bahaa.963',
  tiktok: 'https://www.tiktok.com/@bobinko7?_r=1&_t=ZS-97LZEuGFHsn',
};


// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',    href: '#home' },
  { label: 'Tours',   href: '#tours' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About',   href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const HERO = {
  heading1: 'Explore the',
  heading2: 'Sea & Sky',
  subheading:
    'Experience unforgettable boat tours, breathtaking balloon flights, and magical sunset adventures tailored for the elite explorer.',
  cta1: { label: 'Book Adventure', href: 'https://wa.me/201008318894' },
  cta2: { label: 'Explore Tours',  href: '#tours' },
};

// ─── Experiences (Signature Experiences) ─────────────────────────────────────
export const EXPERIENCES = [
  {
    id: 'boat-tours',
    title: 'Boat Tours',
    description: 'Island hopping, Private charters, and Luxury day cruises.',
    images: [boatTours, boatTours1, boatTours2, boatTours3, boatTours4, boatTours5],
  },
  {
    id: 'balloon-rides',
    title: 'Balloon Rides',
    description: 'Sunrise flights, Scenic mountain tours, and Champagne landings.',
    images: [baloonRides, baloonRides1, photo24],
  },
  {
    id: 'sunset-magic',
    title: 'Sunset Magic',
    description: 'Golden hour cruises, special events, and romantic dinners at sea.',
    images: [sunsetMagic, sunsetMagic1, sunsetMagic2, sunsetMagic3],
  },
];

// ─── Gallery (Captured Moments) ───────────────────────────────────────────────
export const GALLERY_IMAGES = [
  { src: gallery,      alt: 'Guests on a J&B boat tour on the Nile',         span: 'tall'   },
  { src: boatTours3,   alt: 'Sunset boat cruise on the Nile at golden hour',  span: 'wide'   },
  { src: photo10,      alt: 'Happy guests relaxing on the felucca',            span: 'normal' },
  { src: photo8,       alt: 'Group photo on J&B Excursions boat',              span: 'normal' },
  { src: gallery1,     alt: 'Guests enjoying a private charter',               span: 'tall'   },
  { src: sunsetMagic3, alt: 'Magical sunset over the Nile',                   span: 'normal' },
  { src: photo7,       alt: 'Guests aboard during golden hour on the Nile',    span: 'normal' },
  { src: photo11,      alt: 'Scenic moment from a J&B Excursions tour',        span: 'normal' },
  { src: photo13,      alt: 'Travelers enjoying the river breeze',             span: 'normal' },
  { src: photo14,      alt: 'Candid moment aboard a J&B boat',                 span: 'normal' },
  { src: photo18,      alt: 'Guests admiring the Nile views',                  span: 'normal' },
];

// ─── About ────────────────────────────────────────────────────────────────────
export const ABOUT = {
  eyebrow: 'OUR STORY',
  heading: 'Elevating Exploration Beyond Boundaries',
  paragraphs: [
    'My journey on the Nile started as a deckhand, doing the simplest jobs on board. The first 5 months were challenging, but I took every opportunity to learn and understand how everything worked.',
    'What began as a job quickly turned into a passion for boats, the Nile, and river tourism. That passion helped me grow from deckhand to captain, and after more than 6 years on the water, I still love sharing the beauty of the Nile with every guest who comes aboard.',
    'My wife Jan and I pour our hearts into growing this small business — and every day we put in the work, we are reminded why we love what we do.',
  ],
  stat: { value: '6+', label: 'Years of Excellence' },
  image: aboutImg,
};

// ─── Why Choose Us ────────────────────────────────────────────────────────────
export const FEATURES = [
  {
    id: 'guides',
    icon: 'Compass',
    title: 'Experienced Guides',
    description: 'Passionately sharing hidden gems and local secrets with every group.',
  },
  {
    id: 'safety',
    icon: 'ShieldCheck',
    title: 'Safety First',
    description: 'Rigorous inspections and certified protocols for absolute peace of mind.',
  },
  {
    id: 'luxury',
    icon: 'Gem',
    title: 'Luxury Standards',
    description: 'From premium catering to private cabins, we redefine travel comfort.',
  },
  {
    id: 'local',
    icon: 'Map',
    title: 'Local Insight',
    description: 'Deep roots in the community allow us to offer truly authentic journeys.',
  },
];

// ─── CTA ──────────────────────────────────────────────────────────────────────
export const CTA = {
  heading: 'Book Your Adventure Today',
  subheading:
    'Secure your spot for a once-in-a-lifetime journey. Limited availability for private charters and sunrise flights.',
  buttonLabel: 'INQUIRE NOW',
  buttonHref: 'https://wa.me/201008318894',
};

// ─── Testimonials (static seeds shown before Supabase loads) ──────────────────
export const STATIC_TESTIMONIALS = [
  
];

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FOOTER_LINKS = [
  { label: 'Private Charters', href: '#tours' },
  { label: 'Balloon Safaris',  href: '#tours' },
  { label: 'Sunset Dinners',   href: '#tours' },
  { label: 'Island Hopping',   href: '#tours' },
];
