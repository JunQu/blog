/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/blog',
  experimental: {
    esmExternals: true
  }
}

module.exports = nextConfig
