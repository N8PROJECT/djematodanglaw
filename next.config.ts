import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  allowedDevOrigins: ["192.168.1.8", "localhost"],
};

export default nextConfig;
