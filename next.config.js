/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/blog',
  images: {
    loader: "imgix",
    path: "/blog",
  }
}

module.exports = nextConfig
