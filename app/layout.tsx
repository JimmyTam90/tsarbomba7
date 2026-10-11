import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Analytics from "@/components/Analytics";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: SITE.baseUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE.baseUrl,
    siteName: SITE.businessName,
    title: SITE.title,
    description: SITE.description,
    locale: "en_US",
    images: [
      {
        url: "https://tsarbomba.com/cdn/shop/files/TB8208A_-46-04.png?v=1768189763&width=1200",
        width: 1200,
        height: 1200,
        alt: "Tsar Bomba TB8208A automatic skeleton watch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#090A0F",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href={SITE.merchantOrigin} />
        <link rel="preconnect" href={SITE.merchantOrigin} crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
