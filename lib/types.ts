export type AffiliateStatus = "VERIFIED" | "PLAUSIBLE" | "UNKNOWN";
export type Availability = "available" | "partially_available" | "unknown";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  price: number;
  currency: "USD";
  productUrl: string; // plain merchant URL (no tracking)
  affiliateUrl: string; // CTA destination
  affiliateStatus: AffiliateStatus;
  availability: Availability;
  availabilityNote: string;
  images: ProductImage[];
  specs: SpecRow[];
  highlights: string[];
  bestFor: string;
  sourcePage: string;
  lastVerified: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
