import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  pageExtensions: ["ts", "tsx", "mdx"],
  //rehype or remark plugins can't be used with the mdxRs option
  experimental: {
    mdxRs: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "whqfcbgcdxjojnzjppzo.supabase.co",
        pathname: "/storage/v1/object/public/johnapella.com/**",
      },
    ],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
