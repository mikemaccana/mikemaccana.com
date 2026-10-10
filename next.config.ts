import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      { source: "/blog", destination: "/work", permanent: false },
      { source: "/blog/:slug", destination: "/work", permanent: false },
      { source: "/archive", destination: "/work", permanent: false },
      { source: "/solana-book", destination: "/book", permanent: true },
    ];
  },
};

export default nextConfig;
