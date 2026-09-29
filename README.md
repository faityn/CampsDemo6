# Luxury Resort Collection — Next.js + TypeScript + Tailwind

A premium, editorial-style resort collection inspired by the supplied reference images. It includes:

- Full-screen 3-resort intro / selector page
- Dedicated detail page for each resort
- Framer Motion reveal animations
- Swiper hero and gallery sliders
- Responsive mobile navigation
- Data-driven resort content, logo mark, colors, contact information and images
- Warm cream / espresso / muted-gold palette with soft gradients and overlays
- Remote images intentionally kept separate from the uploaded reference images

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Routes

- `/` — 3 resort intro page
- `/resorts/hoyor-zagal` — Hoyor Zagal detail
- `/resorts/alungoo-ger-hotel` — Alungoo detail
- `/resorts/guru-eco-complex` — Guru detail

## Change logo, text, images and colors

Edit only:

`src/data/resorts.ts`

Each resort has:

- `name`
- `subtitle`
- `logoSrc` — put `/your-logo.png` here to replace the temporary symbol; leave empty to use the built-in mark
- `logoMark` — temporary logo mark shown when `logoSrc` is empty
- `description`
- `hero`, `introImage`, `gallery`
- `accommodation`
- `restaurant`
- `contact`
- `features`
- `theme.accent / dark / light`

The layout/components do not need to be changed for normal content replacement.

## Real logo

For a real logo image, replace the `Logo` component's symbol with `next/image`, or put SVG/PNG files in `/public` and set the logo path in the data model.

## Images

The starter uses Unsplash-hosted demo images so the project is not dependent on the two uploaded reference screenshots. Replace the image URLs in `src/data/resorts.ts` with your own optimized WebP/JPG files or CDN URLs before production.
