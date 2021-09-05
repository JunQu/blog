/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/blog',
  images: {
    loader: "imgix",
    path: "/blog",
  },
  experimental: {
    esmExternals: true
  }
}

module.exports = nextConfig
