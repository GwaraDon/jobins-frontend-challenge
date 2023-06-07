/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    loader: "default",
    path: "/_next/image",
  },
  output: "export",
  distDir: "build",
};

module.exports = nextConfig;
