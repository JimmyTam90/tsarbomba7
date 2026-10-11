import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | PrimeGearLab",
  alternates: { canonical: `${SITE.baseUrl}/contact` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Contact" updated="October 11, 2026">
      <p>For questions about this page, corrections or privacy requests, email us:</p>
      <p><a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a></p>
      <p>For orders, shipping, warranty or returns, please contact the merchant directly through tsarbomba.com. We cannot access or change merchant orders.</p>
    </LegalPage>
  );
}
