/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com', 'res.cloudinary.com'],
  }
}

const { withSuperjson } = require('next-superjson')

module.exports = withSuperjson()(nextConfig)
