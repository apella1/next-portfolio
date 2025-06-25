import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  transpilePackages: ["react-syntax-highlighter"],
  //rehype or remark plugins can't be used with the mdxRs option
  experimental: {
    mdxRs: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "whqfcbgcdxjojnzjppzo.supabase.co",
        pathname: "/storage/v1/object/public/johnapella.com/**",
      },
    ],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
