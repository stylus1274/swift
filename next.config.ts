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
        source: "/new-home-construction",
        destination: "/custom-home-building",
        permanent: true,
      },
      {
        source: "/residential-remodeling",
        destination: "/home-remodeling",
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
