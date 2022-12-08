/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["unsplash.it"],
  },
  env: {
    API: process.env.API,
    APIKEY: process.env.APIKEY,
  },
};

module.exports = nextConfig;
