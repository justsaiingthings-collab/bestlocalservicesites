/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@bestlocal/ui", "@bestlocal/templates"],
  output: "export",
  basePath: "/bestlocalservicesites/landscaping",
  assetPrefix: "/bestlocalservicesites/landscaping/",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
