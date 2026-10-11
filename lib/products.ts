import type { Product, FaqItem } from "./types";
import { withRef } from "./affiliate";

const CDN = "https://tsarbomba.com/cdn/shop/files";

/**
 * PRODUCT DATA MANIFEST: single source of truth for every product fact on the page.
 * Source: merchant product pages, fetched 2026-10-11.
 * affiliateStatus is PLAUSIBLE: the ref=rtgedjod structure was supplied by the site owner,
 * but deep-link commission tracking has not been independently verified with the merchant/network.
 */
export const PRODUCTS: Product[] = [
  {
    id: "tb8208a",
    name: "Tsar Bomba Elemental TB8208A Automatic Skeleton Watch",
    shortName: "TB8208A",
    tagline: "Automatic skeleton tonneau watch with a visible movement",
    price: 399.99,
    currency: "USD",
    productUrl: "https://tsarbomba.com/products/tb8208a",
    affiliateUrl: withRef("https://tsarbomba.com/products/tb8208a"),
    affiliateStatus: "PLAUSIBLE",
    availability: "partially_available",
    availabilityNote:
      "Rose Gold Black, Black, Silver Blue, Black Orange and Black Blue were purchasable when checked; Black Yellow, Silver Orange and Gold Blue showed as sold out.",
    images: [
      { src: `${CDN}/TB8208A_-46-04.png?v=1768189763&width=1214`, alt: "Tsar Bomba TB8208A in rose gold black with black strap" },
      { src: `${CDN}/TB8208A_-45-04.png?v=1769396438&width=1214`, alt: "Tsar Bomba TB8208A in black with black skeleton dial" },
      { src: `${CDN}/TB8208A_-41-04.png?v=1769396438&width=1214`, alt: "Tsar Bomba TB8208A in silver blue with blue skeleton dial" },
    ],
    specs: [
      { label: "Movement", value: "Miyota automatic" },
      { label: "Case / bezel", value: "316L stainless steel" },
      { label: "Crystal", value: "Sapphire" },
      { label: "Water resistance", value: "5 ATM / 5 BAR" },
      { label: "Case size", value: "43 x 50.5 x 15.5 mm" },
      { label: "Weight", value: "130 g" },
      { label: "Strap", value: "Silicone, 26 mm wide" },
      { label: "Luminous", value: "Grade A" },
    ],
    highlights: [
      "Skeleton dial shows the movement at work",
      "Miyota automatic movement (no battery changes)",
      "Sapphire crystal and 316L stainless steel case",
      "Five colorways in stock when checked",
    ],
    bestFor: "Buyers who want a visible automatic movement in a bold tonneau case.",
    sourcePage: "https://tsarbomba.com/products/tb8208a",
    lastVerified: "2026-10-11",
  },
  {
    id: "tb8204q",
    name: "Tsar Bomba Elemental TB8204Q Quartz Chronograph-Style Watch",
    shortName: "TB8204Q",
    tagline: "Seiko quartz tonneau watch with a multifunction three-eye dial",
    price: 219.99,
    currency: "USD",
    productUrl: "https://tsarbomba.com/products/tb8204q",
    affiliateUrl: withRef("https://tsarbomba.com/products/tb8204q"),
    affiliateStatus: "PLAUSIBLE",
    availability: "available",
    availabilityNote: "All 13 listed colorways were purchasable when checked.",
    images: [
      { src: `${CDN}/TB8204Q-SB.png?v=1789033975&width=1214`, alt: "Tsar Bomba TB8204Q in silver black" },
      { src: `${CDN}/TB8204Q-BB-1.png?v=1789033975&width=1214`, alt: "Tsar Bomba TB8204Q in black blue" },
      { src: `${CDN}/TB8204Q-SR.png?v=1789033976&width=1214`, alt: "Tsar Bomba TB8204Q in silver red" },
    ],
    specs: [
      { label: "Movement", value: "Seiko quartz" },
      { label: "Case / bezel", value: "316L stainless steel" },
      { label: "Crystal", value: "Sapphire" },
      { label: "Water resistance", value: "5 ATM / 5 BAR" },
      { label: "Case size", value: "43 x 50.5 x 15.5 mm" },
      { label: "Weight", value: "125 g" },
      { label: "Strap", value: "Silicone, 26 mm wide" },
      { label: "Luminous", value: "Grade A" },
    ],
    highlights: [
      "Multifunction dial with sub-dials and a date display",
      "Seiko quartz movement for grab-and-go accuracy",
      "Sapphire crystal and 316L stainless steel case",
      "Lowest entry price of the two models",
    ],
    bestFor: "Buyers who want the same tonneau case at a lower price with a quartz movement.",
    sourcePage: "https://tsarbomba.com/products/tb8204q",
    lastVerified: "2026-10-11",
  },
];

export const HERO = PRODUCTS[0];

export const COLLECTION = {
  name: "Elemental Collection",
  url: "https://tsarbomba.com/collections/elemental-collection",
  affiliateUrl: withRef("https://tsarbomba.com/collections/elemental-collection"),
  affiliateStatus: "PLAUSIBLE" as const,
};

export const MERCHANT_TERMS = [
  { title: "Free shipping", body: "Merchant lists free shipping. Normal delivery is quoted at 7-10 days; customs or import duties may apply." },
  { title: "2-year warranty", body: "Covers manufacturing defects, per the merchant (repair or replace)." },
  { title: "30-day returns", body: "Returns must be unused and in original packaging, within 30 days of delivery." },
  { title: "Secure checkout", body: "Merchant lists major cards, PayPal, Apple Pay, Google Pay and installment options." },
];

export const FAQS: FaqItem[] = [
  {
    q: "What is the difference between the TB8208A and the TB8204Q?",
    a: "Both share the same 43 mm tonneau case, sapphire crystal and 5 ATM water resistance. The TB8208A has a Miyota automatic movement and a skeleton dial. The TB8204Q has a Seiko quartz movement and a multifunction dial with sub-dials and a date display. The TB8204Q is lower priced.",
  },
  {
    q: "Is the watch waterproof?",
    a: "Both models are rated 5 ATM, which the merchant describes as water-resistant rather than waterproof. The merchant does not recommend wearing them in the shower, hot bath or sauna, or while swimming.",
  },
  {
    q: "How long does shipping take, and will I pay duties?",
    a: "The merchant lists free shipping with normal delivery of 7-10 days. Customs or import duties cannot always be avoided, so check the merchant shipping details before you order.",
  },
  {
    q: "What does the warranty cover?",
    a: "The merchant offers a 2-year warranty valid from the purchase date, covering manufacturing defects with repair or replacement. Read the warranty page on the merchant site for full terms.",
  },
  {
    q: "Can I return a watch?",
    a: "The merchant offers 30-day returns for unused items in original packaging. Contact the merchant support team to start a return.",
  },
  {
    q: "Is PrimeGearLab the seller?",
    a: "No. PrimeGearLab is an independent publisher. Orders, payments, shipping, warranty and returns are handled by the merchant, Tsar Bomba, at tsarbomba.com.",
  },
];
