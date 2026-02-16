# Yingzhuo Wang — Architectural Portfolio

A minimalist, performance-focused portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

### Vercel (Recommended)

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click Deploy

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com), import the repo
3. Build command: `npm run build`
4. Publish directory: `.next`

### Static Export (Any Host)

Add to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",
};
```

Then run `npm run build`. Upload the `out/` folder to any static host.

## Updating Content

### Edit Personal Information

All site-wide info (name, email, social links) is in one file:

```
src/data/siteConfig.ts
```

### Add or Edit Projects

All project data lives in a single file:

```
src/data/projects.ts
```

Each project has this structure:

```ts
{
  slug: "project-url-name",        // URL-safe name
  title: "Project Title",
  subtitle: "Short description",
  year: "2024",
  location: "City, ST",
  categories: ["residential", "community"],  // filter tags
  thumbnail: "/images/projects/my-project-thumb.jpg",
  images: [
    "/images/projects/my-project-01.jpg",
    "/images/projects/my-project-02.jpg",
  ],
  description: "Full project description...",
  philosophy: "Design philosophy for this project...",
  communityImpact: "Community impact statement...",
  featured: true,                  // show on homepage
  award: "Optional award text",    // omit if none
}
```

Available categories: `residential`, `community`, `urban-design`, `adaptive-reuse`, `public`.

### Replace Images

1. Add your images to `public/images/projects/`
2. For best performance, use `.jpg` or `.webp` format
3. Recommended sizes:
   - Thumbnails: 1200x900px
   - Gallery images: 2400x1600px (or larger)
   - Portrait: 800x1000px
4. Update the image paths in `src/data/projects.ts`

To replace the portrait photo, add your image to `public/images/about/` and update the path in:
- `src/app/page.tsx` (homepage bio section)
- `src/app/about/page.tsx`

### Edit Page Content

| Content | File |
|---------|------|
| Homepage | `src/app/page.tsx` |
| About page bio, timeline, values | `src/app/about/page.tsx` |
| Contact page | `src/app/contact/page.tsx` |
| Header navigation | `src/components/Header.tsx` |
| Footer | `src/components/Footer.tsx` |

### Connect the Contact Form

The form currently opens a `mailto:` link. To connect a form service:

1. **Formspree**: Replace the `handleSubmit` in `src/app/contact/page.tsx` with a fetch to `https://formspree.io/f/YOUR_ID`
2. **Netlify Forms**: Add `data-netlify="true"` to the form element
3. **Custom API**: Create an API route at `src/app/api/contact/route.ts`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (header, footer, metadata)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles and theme
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   └── projects/
│       ├── page.tsx        # Project gallery with filters
│       └── [slug]/page.tsx # Individual project pages
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── AnimatedSection.tsx # Scroll-triggered animations
│   ├── ProjectCard.tsx     # Project grid card
│   └── Lightbox.tsx        # Image lightbox viewer
├── data/
│   ├── projects.ts         # All project data
│   └── siteConfig.ts       # Site configuration
└── lib/
    └── utils.ts            # Utility functions
```

## Features

- Responsive, mobile-first design
- Smooth scroll animations (Framer Motion)
- Image lightbox with keyboard navigation
- Project filtering by category
- Print-friendly project pages (Print/Save PDF button)
- SEO metadata on all pages
- Accessible (semantic HTML, ARIA labels, keyboard navigation)
- Fast builds with Turbopack

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Commands

```bash
npm run dev    # Start development server
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```
