import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    ETHERSCAN_API_KEY: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY,
  }
};

export default nextConfig;
