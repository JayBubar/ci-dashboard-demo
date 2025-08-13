/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure asset prefix for GitHub Pages if needed
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ci-dashboard-demo' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/ci-dashboard-demo' : ''
}

module.exports = nextConfig
