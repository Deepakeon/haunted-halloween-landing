import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/haunted-halloween-landing',
  assetPrefix: '/haunted-halloween-landing/'
};

export default nextConfig;
