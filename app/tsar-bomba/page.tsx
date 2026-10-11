import "@/app/globals.css";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import ProductCard from "@/components/ProductCard";
import StickyCta from "@/components/StickyCta";
import AffiliateLink from "@/components/AffiliateLink";
import { COLLECTION, FAQS, HERO, MERCHANT_TERMS, PRODUCTS } from "@/lib/products";
import { DISCLOSURE } from "@/lib/site";

const [AUTO, QUARTZ] = PRODUCTS;

const compareRows: { label: string; a: string; b: string }[] = [
  { label: "Price (when checked)", a: `$${AUTO.price.toFixed(2)}`, b: `$${QUARTZ.price.toFixed(2)}` },
  { label: "Movement", a: "Miyota automatic", b: "Seiko quartz" },
  { label: "Dial", a: "Skeleton", b: "Multifunction, with date" },
  { label: "Case size", a: "43 x 50.5 x 15.5 mm", b: "43 x 50.5 x 15.5 mm" },
  { label: "Weight", a: "130 g", b: "125 g" },
  { label: "Crystal", a: "Sapphire", b: "Sapphire" },
  { label: "Water resistance", a: "5 ATM", b: "5 ATM" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        {/* HERO: text -> image -> CTA (normal flow on mobile) */}
        <section className="mx-auto max-w-6xl px-4 pb-8 pt-6 md:pt-10" aria-labelledby="hero-title">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:items-start md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-rosegold">2026 buying guide</p>
              <h1 id="hero-title" className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-4xl">
                Tsar Bomba tonneau watches: automatic or quartz?
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                Compare the {AUTO.shortName} automatic skeleton and the {QUARTZ.shortName} quartz chronograph-style model.
                Same 43 mm tonneau case and sapphire crystal, different movement, dial and price.
              </p>
              <ul className="mt-5 grid gap-2 text-slate-200">
                <li>&#10003; Prices from ${QUARTZ.price.toFixed(2)} to ${AUTO.price.toFixed(2)} at the merchant</li>
                <li>&#10003; Free shipping, 2-year warranty and 30-day returns listed by the merchant</li>
                <li>&#10003; Specs checked against the merchant pages on Oct 11, 2026</li>
              </ul>
              <p className="mt-4 text-sm text-slate-400">{DISCLOSURE}</p>
            </div>

            <div className="mx-auto w-full max-w-sm md:max-w-none">
              <div className="relative mx-auto aspect-[4/5] max-h-[26rem] w-full overflow-hidden rounded-2xl border border-white/10 bg-carbon">
                <Image
                  src={HERO.images[0].src}
                  alt={HERO.images[0].alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 416px, 384px"
                  className="object-contain"
                />
              </div>
              <div className="mt-4 space-y-3">
                <AffiliateLink
                  href={HERO.affiliateUrl}
                  productId={HERO.id}
                  placement="hero_primary"
                  className="btn-primary"
                  ariaLabel="Shop the TB8208A at Tsar Bomba (opens in a new tab)"
                >
                  Shop {HERO.shortName} at Tsar Bomba
                </AffiliateLink>
                <a href="#compare" className="btn-secondary">Compare models</a>
              </div>
            </div>
          </div>
        </section>

        {/* Merchant terms (verified) */}
        <section className="border-y border-white/10 bg-carbon" aria-labelledby="terms-title">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <h2 id="terms-title" className="text-2xl font-bold">What the merchant offers</h2>
            <p className="mt-1 text-sm text-slate-400">As listed on tsarbomba.com. Read the merchant policies before you order.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {MERCHANT_TERMS.map((t) => (
                <div key={t.title} className="rounded-xl border border-white/10 bg-obsidian p-4">
                  <h3 className="font-semibold text-rosegold">{t.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product cards */}
        <section className="mx-auto max-w-6xl space-y-6 px-4 py-10" aria-labelledby="picks-title">
          <h2 id="picks-title" className="text-2xl font-bold sm:text-3xl">The two models compared</h2>
          <ProductCard product={AUTO} placement="card_tb8208a" compareHref="#compare" />
          <ProductCard product={QUARTZ} placement="card_tb8204q" compareHref="#compare" />
        </section>

        {/* Comparison */}
        <section id="compare" className="mx-auto max-w-6xl px-4 pb-10" aria-labelledby="compare-title">
          <h2 id="compare-title" className="text-2xl font-bold sm:text-3xl">Side-by-side specs</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[20rem] text-left text-sm">
              <caption className="sr-only">Comparison of the Tsar Bomba TB8208A and TB8204Q</caption>
              <thead className="bg-carbon">
                <tr>
                  <th scope="col" className="p-3 font-semibold text-slate-300">Spec</th>
                  <th scope="col" className="p-3 font-semibold text-slatelight">{AUTO.shortName}</th>
                  <th scope="col" className="p-3 font-semibold text-slatelight">{QUARTZ.shortName}</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r) => (
                  <tr key={r.label} className="border-t border-white/10">
                    <th scope="row" className="p-3 font-medium text-slate-300">{r.label}</th>
                    <td className="p-3 text-slatelight">{r.a}</td>
                    <td className="p-3 text-slatelight">{r.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who each is for + honest notes */}
        <section className="border-y border-white/10 bg-carbon" aria-labelledby="who-title">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
            <div>
              <h2 id="who-title" className="text-2xl font-bold">Which one fits you?</h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li><strong className="text-slatelight">{AUTO.shortName}:</strong> {AUTO.bestFor}</li>
                <li><strong className="text-slatelight">{QUARTZ.shortName}:</strong> {QUARTZ.bestFor}</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Good to know before you buy</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                <li>5 ATM is water-resistant, not waterproof. The merchant advises against showers, hot baths, saunas and swimming.</li>
                <li>Cases are 43 mm wide and about 15.5 mm thick, so check the fit on your wrist.</li>
                <li>Customs or import duties may apply, and normal delivery is quoted at 7-10 days.</li>
                <li>Some {AUTO.shortName} colors were sold out when checked. Stock and prices can change.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 py-10" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>
          <div className="mt-6"><Faq items={FAQS} /></div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-3xl px-4 pb-14 text-center" aria-labelledby="final-title">
          <h2 id="final-title" className="text-2xl font-bold sm:text-3xl">Ready to see current prices and colors?</h2>
          <p className="mt-3 text-slate-300">Stock and pricing are controlled by the merchant. Check the live product page before you decide.</p>
          <div className="mx-auto mt-6 max-w-sm space-y-3">
            <AffiliateLink href={HERO.affiliateUrl} productId={HERO.id} placement="final_primary" className="btn-primary">
              Shop {HERO.shortName} at Tsar Bomba
            </AffiliateLink>
            <AffiliateLink href={QUARTZ.affiliateUrl} productId={QUARTZ.id} placement="final_secondary" className="btn-secondary">
              Shop {QUARTZ.shortName} at Tsar Bomba
            </AffiliateLink>
            <AffiliateLink href={COLLECTION.affiliateUrl} productId="elemental-collection" placement="final_collection" className="btn-secondary">
              Browse the {COLLECTION.name}
            </AffiliateLink>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
