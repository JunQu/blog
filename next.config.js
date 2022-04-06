/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'development' ? '':'/blog',
  images: {
    //  a error made by nextjs
    // https://github.com/vercel/next.js/discussions/19065
    loader: 'custom'
  }
}

module.exports = nextConfig
