# J & B Excursions — Tourism Website

A production-ready single-page React website for **J & B Excursions**, a luxury boat tour, balloon ride, and sunset adventure company based in Luxor, Egypt.

---

## Tech Stack

- **React 18** + **Vite**
- **CSS Modules** for scoped, maintainable styles
- **Supabase** for reviews (no custom backend required)
- **lucide-react** for icons

---

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Button.jsx / Button.module.css
│   ├── ExperienceCard.jsx
│   ├── FeatureCard.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ReviewCard.jsx
│   ├── ReviewForm.jsx
│   ├── SectionTitle.jsx
│   └── StarRating.jsx
├── sections/         # Page sections
│   ├── HeroSection.jsx
│   ├── ExperiencesSection.jsx
│   ├── GallerySection.jsx
│   ├── AboutSection.jsx
│   ├── FeaturesSection.jsx
│   ├── CTASection.jsx
│   └── TestimonialsSection.jsx
├── assets/
│   ├── images/       # All site images
│   └── video/        # hero-bg.mp4
├── data/
│   └── config.js     # ALL content configured here
├── hooks/
│   ├── useInView.js
│   └── useScrollSpy.js
├── lib/
│   └── supabaseClient.js
├── services/
│   └── reviews.js
└── styles/
    └── global.css
```

---

## Quick Start

```bash
npm install
cp .env.example .env
# Fill in Supabase credentials (see below)
npm run dev
```

---

## Supabase Setup (from scratch)

### Step 1 — Create account and project
1. Go to https://supabase.com and sign up (free tier is sufficient).
2. Click "New Project", name it `jb-excursions`, choose a region close to Egypt (EU West recommended), set a DB password.
3. Wait ~1 minute for provisioning.

### Step 2 — Create the reviews table
In your Supabase dashboard, open SQL Editor → New query → paste and run:

```sql
CREATE TABLE reviews (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name       text NOT NULL,
  rating     integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review     text NOT NULL,
  approved   boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read approved reviews"
  ON reviews FOR SELECT
  USING (approved = true);

CREATE POLICY "Submit reviews"
  ON reviews FOR INSERT
  WITH CHECK (approved = false);
```

### Step 3 — Get API credentials
Go to Settings → API and copy:
- Project URL  (https://xxxxxxxxxx.supabase.co)
- anon/public key

### Step 4 — Create .env
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Step 5 — Approving reviews
Reviews are saved with `approved = false` by default and are NOT shown publicly.
To approve: Supabase dashboard → Table Editor → reviews → set `approved = true`.

---

## Customising Content

Everything is in `src/data/config.js`:

| What              | Object / array         |
|-------------------|------------------------|
| Phone, WhatsApp   | BUSINESS               |
| Instagram         | BUSINESS.instagram     |
| Hero text         | HERO                   |
| Experience cards  | EXPERIENCES            |
| Gallery images    | GALLERY_IMAGES         |
| About text/image  | ABOUT                  |
| Feature cards     | FEATURES               |
| CTA section       | CTA                    |
| Static testimonials | STATIC_TESTIMONIALS  |
| Footer links      | FOOTER_LINKS           |

---

## Replacing assets
- Images: drop into `src/assets/images/` and update paths in `config.js`
- Video: replace `src/assets/video/hero-bg.mp4`

---

## Deployment
Build with `npm run build`. Deploy the `dist/` folder to Netlify, Vercel, or any static host.
Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as environment variables on your host.

---

## Contact Info
- Phone: +20 10 08318894
- WhatsApp: https://wa.me/201008318894
- Instagram: https://www.instagram.com/bobo.bahaa.963
- Location: In front of Winter Palace Hotel, Luxor, Egypt
