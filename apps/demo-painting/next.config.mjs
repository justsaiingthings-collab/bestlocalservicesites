/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@bestlocal/ui", "@bestlocal/templates"],
  output: "export",
  basePath: "/painting",
  assetPrefix: "/painting/",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
