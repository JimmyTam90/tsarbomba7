import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b border-white/10 bg-obsidian">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/tsar-bomba" className="flex items-center" aria-label={`${SITE.businessName} home`}>
          <Image src={SITE.logoPath} alt={SITE.businessName} width={160} height={40} priority className="h-9 w-auto" />
        </Link>
        <p className="text-right text-xs text-slate-400">Independent buying guide</p>
      </div>
    </header>
  );
}
