/** @type {import('next').NextConfig} */
const nextConfig = {
  // Assets are served locally from /public/wp-content (mirrored from the original),
  // referenced with plain <img> tags, so no remote image config is required.
  reactStrictMode: true,
};

module.exports = nextConfig;
