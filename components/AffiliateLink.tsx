"use client";

import type { ReactNode } from "react";
import { trackAffiliateClick } from "@/lib/tracking";

interface Props {
  href: string;
  productId: string;
  placement: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}

/** Native anchor. Works without JavaScript; tracking is async and non-blocking. */
export default function AffiliateLink({ href, productId, placement, className, ariaLabel, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackAffiliateClick(productId, placement)}
    >
      {children}
    </a>
  );
}
