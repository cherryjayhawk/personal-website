import NextBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};

export default withBundleAnalyzer(nextConfig);

// const withBundleAnalyzer = require('@next/bundle-analyzer')({

//   })

//   /** @type {import('next').NextConfig} */
//   const nextConfig = {}

//   module.exports = withBundleAnalyzer(nextConfig)
