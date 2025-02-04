import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dji.com",
      },
    ],
    domains: ["githubusercontent.com"],
  },
};

export default nextConfig;
