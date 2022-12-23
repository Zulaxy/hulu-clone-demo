/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.kindpng.com", "image.tmdb.org"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
