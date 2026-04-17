/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@bestlocal/ui", "@bestlocal/templates"],
  output: "export",
  basePath: "/roofing",
  assetPrefix: "/roofing/",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
