import Link from "next/link";
import { DISCLOSURE, FOOTER_LINE, LEGAL_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-obsidian">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-400">
        <p className="text-base font-semibold text-slatelight">{SITE.businessName}</p>
        <p className="mt-2 max-w-3xl">{DISCLOSURE}</p>
        <p className="mt-2 max-w-3xl">
          PrimeGearLab is an independent publisher and is not the seller, owner or representative of Tsar Bomba.
          Prices and availability are set by the merchant and may change.
        </p>
        <nav aria-label="Legal" className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
          {LEGAL_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="inline-flex min-h-[44px] items-center underline-offset-4 hover:text-slatelight hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="mt-4">
          Contact Email:{" "}
          <a href={`mailto:${SITE.contactEmail}`} className="break-all underline underline-offset-4 hover:text-slatelight">
            {SITE.contactEmail}
          </a>
        </p>
        <p className="mt-4">{FOOTER_LINE}</p>
      </div>
    </footer>
  );
}
