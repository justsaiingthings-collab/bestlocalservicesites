/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@bestlocal/ui", "@bestlocal/templates"],
  output: "export",
  basePath: "/bestlocalservicesites/hvac",
  assetPrefix: "/bestlocalservicesites/hvac/",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
