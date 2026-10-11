/** @type {import('next').NextConfig} */
// Spoke subpath architecture: page at app/tsar-bomba/page.tsx, NO basePath, NO app/page.tsx.
// assetPrefix makes /_next/* assets load directly from the Spoke domain when the page is
// proxied through the Vercel Hub. Override with NEXT_PUBLIC_ASSET_PREFIX if the Spoke domain changes.
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "tsarbomba.com" },
      { protocol: "https", hostname: "cdn.shopify.com" },
    ],
  },
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "https://tsarbomba7.vercel.app",
  // Spoke root "/" has no page; send direct visits to the subpath.
  async redirects() {
    return [{ source: "/", destination: "/tsar-bomba", permanent: false }];
  },
};

export default nextConfig;
