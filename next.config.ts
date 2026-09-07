import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/home-alternate",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
