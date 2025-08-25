/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'linkedin.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
