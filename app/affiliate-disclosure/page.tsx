import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE, DISCLOSURE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | PrimeGearLab",
  alternates: { canonical: `${SITE.baseUrl}/affiliate-disclosure` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Affiliate Disclosure" updated="October 11, 2026">
      <p>{DISCLOSURE}</p>
      <p>Links to tsarbomba.com on this page are affiliate links. If you click one and make a purchase, the merchant may pay us a commission. The price you pay is not increased because of this.</p>
      <p>Our commission does not change how we describe products. Product facts shown here are taken from the merchant&apos;s own pages and are labeled with the date they were checked. We do not publish fabricated reviews, ratings or testimonials.</p>
      <p>PrimeGearLab is not the merchant and cannot change orders, shipping, warranty or returns. Please contact the merchant for those.</p>
    </LegalPage>
  );
}
