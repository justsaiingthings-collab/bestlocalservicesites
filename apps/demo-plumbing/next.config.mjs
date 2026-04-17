/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@bestlocal/ui", "@bestlocal/templates"],
  output: "export",
  basePath: "/bestlocalservicesites/plumbing",
  assetPrefix: "/bestlocalservicesites/plumbing/",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
