/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    loader: "default",
    path: "/_next/image",
  },
  // uncomment output and distDir to see the build
  // output: "export",
  // distDir: "build",
};

module.exports = nextConfig;
