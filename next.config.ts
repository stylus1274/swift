import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.swiftconstructionandpainting.com" }],
        destination: "https://swiftconstructionandpainting.com/:path*",
        permanent: true,
      },
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
