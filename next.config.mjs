/** @type {import('next').NextConfig} */
// Spoke subpath architecture:
// - The landing page lives at app/tsar-bomba/page.tsx (served at /tsar-bomba).
// - There is NO app/page.tsx and NO basePath (basePath would create /tsar-bomba/tsar-bomba under hub rewrites).
// - Optional assetPrefix: only set NEXT_PUBLIC_ASSET_PREFIX when the hub proxies /tsar-bomba/* and
//   static files (/_next/*) 404 on the hub domain. Example: /tsar-bomba-static
//   (the hub must then rewrite /tsar-bomba-static/_next/* to this spoke's /_next/*).
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || undefined;

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  assetPrefix,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "tsarbomba.com", pathname: "/cdn/shop/**" },
      { protocol: "https", hostname: "cdn.shopify.com", pathname: "/s/files/**" },
    ],
  },
  // Spoke root "/" has no page. Send direct visits (e.g. the Vercel preview) to the subpath.
  async redirects() {
    return [{ source: "/", destination: "/tsar-bomba", permanent: false }];
  },
};

export default nextConfig;
