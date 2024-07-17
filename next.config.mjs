/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.js
module.exports = {
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/N1ro-Test" : "",
  basePath: process.env.NODE_ENV === "production" ? "/N1ro-Test" : "",
};

export default nextConfig;
