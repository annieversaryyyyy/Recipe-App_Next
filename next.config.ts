import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eda.rambler.ru",
      },
      {
        protocol: "https",
        hostname: "food.ru",
      },
      {
        protocol: "https",
        hostname: "food.com",
      },
      {
        protocol: "https",
        hostname: "cdn.food.ru",
      },
    ],
  },
};

export default nextConfig;
