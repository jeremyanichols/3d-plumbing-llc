# 3D Plumbing, LLC — Website

A complete, modern, mobile-first website for **3D Plumbing, LLC** (Manchester, MO — serving the St. Louis metro). Built as fast-loading static HTML/CSS/JS with **zero dependencies and zero build step**. Open it, host it, or port it into WordPress/Webflow/Framer.

---

## 📁 What's in the box

```
3d-plumbing-website/
├── index.html       ← Home (hero, trust signals, services, testimonials, service area)
├── services.html    ← All 10 services as detailed cards
├── about.html       ← Family-owned story, values, credentials
├── gallery.html     ← Job photo grid (graceful placeholders until you add photos)
├── contact.html     ← Phone, lead form, hours table, Google Maps embed
├── styles.css       ← One shared design system (blue/gray, plumbing accents)
├── script.js        ← Mobile menu, sticky header, form handling
├── assets/          ← Drop your images here (see "Images" below)
└── README.md        ← This file
```

---

## 🚀 How to launch it (pick one)

### Option A — Preview locally right now
Double-click `index.html`, or run a tiny local server from this folder:
```bash
cd 3d-plumbing-website
python3 -m http.server 8000
# then visit http://localhost:8000
```

### Option B — Host it free / cheap (recommended)
Drag the whole folder onto any of these — done in minutes, includes free SSL:
- **Netlify** → netlify.com/drop (literally drag-and-drop the folder)
- **Cloudflare Pages**, **Vercel**, or **GitHub Pages**
Point your domain (e.g. `3dplumbingstl.com`) at it and you're live.

### Option C — Port into WordPress / Webflow / Framer
The content is cleanly structured. Copy each page's headings, paragraphs, and the
service/testimonial blocks into your page builder. The CSS class names map 1:1 to
sections, so a developer can recreate the layout quickly. (Going static via Option B
is faster, cheaper, and loads better — only use a CMS if you'll edit copy often.)

---

## ✏️ Things to update before going live

1. **Domain in meta tags** — each page has `<link rel="canonical" href="https://www.3dplumbingstl.com/...">`
   and Open Graph URLs. Replace with your real domain.
2. **Google Maps embed** — `index.html` and `contact.html` use a generic Manchester, MO map.
   For best local SEO, replace the `<iframe src>` with the embed code from your
   **Google Business Profile** (Google Maps → your listing → Share → Embed a map).
3. **The lead form** — see "Wiring up the form" below. Right now it shows a success
   message but does **not** send anywhere yet.
4. **Photos** — see "Images" below. The site looks good with placeholders, great with real photos.
5. **Reviews** — DONE. The three featured reviews are the real verified Google reviews
   (Brian C., Antwon Proctor, Dennis Rowland); the business is rated 5.0 from 4 reviews,
   and that rating is in the `aggregateRating` schema. A 4th review (Ellie Kitchen) is on
   their Google listing. As new reviews come in, swap them into the testimonial cards.
6. **License #** — if Missouri/St. Louis County requires displaying a license number,
   add it to the footer (`Licensed & Insured` line).

---

## 📨 Wiring up the form (so leads reach you)

The form is **already wired** to email leads via [FormSubmit](https://formsubmit.co)
(free, no signup, no backend). You only need to drop in the real email address.

**To go live, replace the placeholder `YOUR-EMAIL@EXAMPLE.COM` in 4 spots:**
- `index.html` — the quote form has it twice (`data-email="…"` and `action="…/…"`)
- `contact.html` — same two spots

A quick find-and-replace of `YOUR-EMAIL@EXAMPLE.COM` → the real inbox does it.

**Then activate it (one time):** submit the form once on the live site. FormSubmit
emails that address an activation link. Click it, and every submission after that
lands in the inbox automatically (with the service type, name, phone, and message).

Until a real email is set, the form runs in **demo mode** — it shows the success
message but doesn't send (and logs a reminder to the browser console).

> Prefer Netlify Forms or Formspree instead? Either works — the handler in
> `script.js` is small and clearly commented.

---

## 🖼️ Images

The `assets/` folder is **already populated**. Two kinds of images are in use:

**Brand logos** (your real logos — backgrounds cut to transparent so they sit on any color):
- `logo-mark.png` — the hexagon 3-D badge, used in the header + footer on every page
- `logo-banner.png` — the full horizontal logo, used on the About + Contact pages
- `favicon.png` — the browser-tab icon (64px, generated from the mark)
- Originals you uploaded (`3d-plumming-logo-*.png`) are kept as source files but not used directly.

**Real 3-D Plumbing photos** (pulled from your existing site — these are genuinely yours):
- `real-van.jpg` — your branded service van (used on Home + About)
- `job-water-heater.jpg` — your gas water-heater install
- `job-water-softener.jpg` / `job-commercial.jpg` — your softener + RO system install
- `badge-local562.jpg`, `badge-phcc.png`, `badge-pic.png` — your union/association logos

**Free stock** (from [Pexels](https://pexels.com) — free for commercial use, no attribution
required) fills the gaps until you have your own shots:
- `hero-plumber.jpg` (home hero), `job-bathroom-remodel.jpg`, `job-kitchen.jpg`,
  `job-fixtures.jpg`, `job-leak-repair.jpg`, `job-drain.jpg`

If any file is missing, a clean styled placeholder shows instead (nothing breaks).

**Tip:** Your real job photos out-convert stock every time. Text or email Joe a few
shots from recent installs and we'll swap them into the gallery (just match the filename,
or send them over). Compress with tinypng.com to keep the site fast.

### Cache-busting (important when you replace an image)

Every asset URL is tagged with a version: `assets/job-kitchen.jpg?v=3`, `styles.css?v=3`,
etc. Browsers cache files by URL, so if you overwrite a file with the **same name**, a
returning visitor keeps seeing the **old** version until the URL changes.

**When you change any image, CSS, or JS:** bump the version everywhere with one
find-and-replace across the project — `?v=3` → `?v=4`. That forces every browser to
re-fetch. (Below-the-fold images also use `loading="lazy"` so the page paints faster.)

---

## ✅ What's already built in

- **Mobile-first, fully responsive** — sticky bottom "Call Now" bar on phones
- **Click-to-call** everywhere (`tel:` links) — the #1 conversion driver for home services
- **"Get a Free Quote" lead form** on Home and Contact
- **Emergency service** highlighted across the site
- **Trust badges** — Since 2005, Licensed & Insured, Union Plumbers, Family Owned, 20+ Years
- **Testimonials** with 5-star ratings
- **SEO** — unique titles/descriptions per page, semantic headings, `LocalBusiness`/`Plumber`
  schema (JSON-LD) with hours, phone, and service area for rich Google results
- **Fast** — no frameworks, system + Google fonts, inline SVG icons (no icon library)
- **Accessible** — labeled form fields, alt text, keyboard-friendly nav, reduced-motion support

---

## 🎨 Brand colors (in `styles.css` `:root`)

| Token | Hex | Use |
|-------|-----|-----|
| `--navy` | `#0b2a4a` | Headers, footer, hero |
| `--blue` | `#1c6fc0` | Primary buttons, links |
| `--cyan` | `#18b6cf` | Water accents |
| `--emergency` | `#e23b3b` | Call/emergency buttons |

Change them in one place and the whole site updates.

---

*Questions on customizing? Everything is plain HTML/CSS/JS — any web developer can take it from here.*
