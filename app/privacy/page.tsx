import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | PrimeGearLab",
  alternates: { canonical: `${SITE.baseUrl}/privacy` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" updated="October 11, 2026">
      <p>This policy explains in general terms how PrimeGearLab (&quot;we&quot;, &quot;us&quot;) handles information on this page. It is general-purpose information, not legal advice.</p>
      <h2>Information we collect</h2>
      <ul>
        <li>Usage data such as pages viewed, device and browser type, and referring source, collected through analytics tools if they are enabled on this site.</li>
        <li>Advertising and campaign data (for example UTM parameters and ad-platform identifiers) when you arrive from an ad.</li>
        <li>Information you send us voluntarily, such as your email address if you contact us.</li>
      </ul>
      <h2>Cookies and tracking</h2>
      <p>We may use Google Analytics, Google Ads and Meta Pixel to measure traffic and ad performance. These services may set cookies or similar identifiers. You can control cookies in your browser settings and through the opt-out tools offered by those providers.</p>
      <h2>Affiliate links</h2>
      <p>Links to the merchant carry an affiliate tracking parameter so the merchant can attribute a visit to us. When you click, you leave this site and the merchant&apos;s own privacy policy applies. We do not receive your payment or order details.</p>
      <h2>How we use information</h2>
      <p>To operate and improve this page, measure marketing performance, respond to messages and comply with legal obligations. We do not sell personal information that we collect directly from this page.</p>
      <h2>Your choices</h2>
      <p>To ask about your information, email <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.</p>
    </LegalPage>
  );
}
