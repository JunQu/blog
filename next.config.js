/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/blog',
  images: {
    loader: "imgix",
    path:''
  }
}

module.exports = nextConfig
