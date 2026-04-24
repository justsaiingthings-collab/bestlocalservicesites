/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@bestlocal/ui", "@bestlocal/templates"],
  output: "export",
  trailingSlash: true,
  basePath: "/landscaping",
  assetPrefix: "/landscaping/",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
