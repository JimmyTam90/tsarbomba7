/** @type {import('next').NextConfig} */
// NOTE: do NOT add basePath here. The landing page lives at app/tsar-bomba/page.tsx
// so that Vercel hub rewrites to /tsar-bomba do not become /tsar-bomba/tsar-bomba.
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "tsarbomba.com", pathname: "/cdn/shop/**" },
      { protocol: "https", hostname: "cdn.shopify.com", pathname: "/s/files/**" },
    ],
  },
};

export default nextConfig;
