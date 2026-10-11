import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE, DISCLOSURE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | PrimeGearLab",
  alternates: { canonical: `${SITE.baseUrl}/terms` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Terms of Use" updated="October 11, 2026">
      <p>By using this page you agree to these general terms.</p>
      <h2>Independent publisher</h2>
      <p>PrimeGearLab is an independent publisher and affiliate guide. We are not the seller, owner, operator or representative of Tsar Bomba. All purchases are made on the merchant&apos;s website and are governed by the merchant&apos;s own terms, shipping, warranty and return policies.</p>
      <h2>Information accuracy</h2>
      <p>Prices, availability, specifications and policies shown here were checked against the merchant site on the date listed and may change at any time. Always confirm details with the merchant before you buy.</p>
      <h2>No guarantees</h2>
      <p>This page is provided as is, for general information. We make no warranty about the merchant, its products or its service.</p>
      <h2>Affiliate relationship</h2>
      <p>{DISCLOSURE}</p>
      <h2>Contact</h2>
      <p>Questions about these terms: <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.</p>
    </LegalPage>
  );
}
