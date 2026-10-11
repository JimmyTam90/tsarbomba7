export interface TrackingWindow extends Window {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
}

/** Fire-and-forget. Never blocks or delays navigation. */
export function trackAffiliateClick(productId: string, placement: string): void {
  try {
    const w = window as TrackingWindow;
    w.gtag?.("event", "affiliate_click", {
      product_id: productId,
      placement,
      transport_type: "beacon",
    });
    w.fbq?.("trackCustom", "AffiliateClick", { product_id: productId, placement });
  } catch {
    /* tracking must never break navigation */
  }
}
