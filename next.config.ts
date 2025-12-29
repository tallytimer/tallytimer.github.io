import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for better link compatibility on static hosts
  trailingSlash: true,
};

export default nextConfig;
