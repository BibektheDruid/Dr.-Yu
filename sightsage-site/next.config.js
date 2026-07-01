/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mirrored Shopify CDN assets are served locally from /public/cdn and referenced
  // with plain <img> tags, so image optimization is disabled.
  reactStrictMode: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
