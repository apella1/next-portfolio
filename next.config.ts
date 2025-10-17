import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  pageExtensions: ["ts", "tsx", "mdx"],
  // mdxRs doesn't support custom MDX components via useMDXComponents()
  // disabled to enable custom component styling
  // experimental: {
  //   mdxRs: true,
  // },

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

  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },

  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
