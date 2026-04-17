/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@bestlocal/ui", "@bestlocal/templates"],
  output: "export",
  basePath: "/hvac",
  assetPrefix: "/hvac/",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
