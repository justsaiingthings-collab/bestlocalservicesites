/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@bestlocal/ui", "@bestlocal/templates"],
  output: "export",
  basePath: "/cleaning",
  assetPrefix: "/cleaning/",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
