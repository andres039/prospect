/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com", "static.wikia.nocookie.net", "ik.imagekit.io"],
  },
};

module.exports = nextConfig;
