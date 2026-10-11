// Affiliate ref value supplied by the site owner (DEFAULT_AFFILIATE_URL). Never invented.
export const AFFILIATE_REF_PARAM = "ref";
export const AFFILIATE_REF_VALUE = "rtgedjod";

export const DEFAULT_AFFILIATE_URL = `https://tsarbomba.com/?${AFFILIATE_REF_PARAM}=${AFFILIATE_REF_VALUE}`;

/** Appends the owner-supplied ref exactly once, preserving any other query params. */
export function withRef(url: string): string {
  const u = new URL(url);
  u.searchParams.set(AFFILIATE_REF_PARAM, AFFILIATE_REF_VALUE);
  return u.toString();
}
