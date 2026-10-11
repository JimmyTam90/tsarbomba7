# PrimeGearLab: Tsar Bomba landing page (Next.js 14, App Router, Tailwind)

1. `npm install`
2. Optional: copy `.env.example` to `.env.local` and set NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_GOOGLE_ADS_ID / NEXT_PUBLIC_META_PIXEL_ID
3. `npm run typecheck && npm run build`
4. Deploy to Vercel (no basePath; page is at app/tsar-bomba/page.tsx)

Product facts live only in `lib/products.ts` (single source of truth). SEO copy lives in `lib/site.ts`.
