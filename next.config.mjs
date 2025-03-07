/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  // Add this if you're using experimental features
  experimental: {
    appDir: true
  }
};

export default nextConfig;
