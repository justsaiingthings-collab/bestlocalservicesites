/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@bestlocal/ui", "@bestlocal/templates"],
  output: "export",
  basePath: "/bestlocalservicesites/painting",
  assetPrefix: "/bestlocalservicesites/painting/",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
