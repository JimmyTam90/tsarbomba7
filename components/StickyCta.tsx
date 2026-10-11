import AffiliateLink from "./AffiliateLink";
import { HERO } from "@/lib/products";

/** Separate fixed bar (mobile only). Not part of any product image. */
export default function StickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-obsidian/95 px-4 pt-3 backdrop-blur pointer-events-auto md:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <AffiliateLink href={HERO.affiliateUrl} productId={HERO.id} placement="sticky_bar" className="btn-primary">
        Check {HERO.shortName} Price at Tsar Bomba
      </AffiliateLink>
    </div>
  );
}
