import Image from "next/image";
import type { Product } from "@/lib/types";
import AffiliateLink from "./AffiliateLink";

interface Props {
  product: Product;
  placement: string;
  headingLevel?: "h2" | "h3";
  priority?: boolean;
  compareHref?: string;
}

const usd = (n: number) => `$${n.toFixed(2)}`;

/**
 * DOM order = mobile order: info -> IMAGE -> primary CTA -> secondary CTA -> specs.
 * On md+ the media column sits on the right (fixed ~22rem) and spans both rows,
 * so the left column (info + specs) fills the card with no dead space.
 * The CTA is always a normal-flow block BELOW the image. Never absolute/overlaid.
 */
export default function ProductCard({ product, placement, headingLevel = "h3", priority = false, compareHref }: Props) {
  const Heading = headingLevel;
  const main = product.images[0];
  return (
    <article className="carbon-bg overflow-hidden rounded-2xl border border-white/10 p-4 sm:p-6">
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[minmax(0,1fr)_minmax(0,21rem)] md:items-start">
        {/* 1. Product information */}
        <div className="md:col-start-1 md:row-start-1">
          <Heading className="text-xl font-bold leading-tight text-slatelight sm:text-2xl">{product.name}</Heading>
          <p className="mt-2 text-slate-300">{product.tagline}</p>
          <p className="mt-3 text-2xl font-extrabold text-rosegold">
            {usd(product.price)} <span className="text-sm font-normal text-slate-400">USD at merchant, when checked</span>
          </p>
          <ul className="mt-4 space-y-2 text-slate-200">
            {product.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span aria-hidden="true" className="text-crimson">&#10003;</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-400">{product.availabilityNote}</p>
        </div>

        {/* 2. IMAGE then CTA, stacked in normal flow */}
        <div className="mx-auto w-full max-w-sm md:col-start-2 md:row-span-2 md:row-start-1 md:max-w-none">
          <div className="relative mx-auto aspect-[4/5] max-h-[26rem] w-full overflow-hidden rounded-xl bg-obsidian md:max-h-[24rem]">
            <Image
              src={main.src}
              alt={main.alt}
              fill
              sizes="(min-width: 768px) 21rem, 90vw"
              className="object-contain"
              priority={priority}
            />
          </div>
          <div className="mt-4 space-y-3">
            <AffiliateLink
              href={product.affiliateUrl}
              productId={product.id}
              placement={placement}
              className="btn-primary"
              ariaLabel={`Shop ${product.shortName} at Tsar Bomba (opens in a new tab)`}
            >
              Shop {product.shortName} at Tsar Bomba
            </AffiliateLink>
            {compareHref ? (
              <a href={compareHref} className="btn-secondary">Compare models</a>
            ) : null}
          </div>
        </div>

        {/* 3. Additional info (after the CTA on mobile; under the info on desktop) */}
        <dl className="grid grid-cols-1 gap-x-6 gap-y-1 text-sm sm:grid-cols-2 md:col-start-1 md:row-start-2 md:self-end">
          {product.specs.map((s) => (
            <div key={s.label} className="flex justify-between gap-3 border-b border-white/5 py-1.5">
              <dt className="text-slate-400">{s.label}</dt>
              <dd className="text-right font-medium text-slatelight">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
