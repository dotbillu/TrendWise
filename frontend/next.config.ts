import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['www.google.com', 'source.unsplash.com', 'lh3.googleusercontent.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
