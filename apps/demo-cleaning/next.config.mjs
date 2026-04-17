/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@bestlocal/ui", "@bestlocal/templates"],
  output: "export",
  basePath: "/bestlocalservicesites/cleaning",
  assetPrefix: "/bestlocalservicesites/cleaning/",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
