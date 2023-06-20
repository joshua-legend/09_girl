const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL,
  },
  async rewrites() {
    return [
      {
        source: '/stores/:id*',
        destination: '/stores/:id*',
      },
      {
        source: '/:path*',
        destination: 'http://localhost:8080/:path*',
      },
    ]
  },
}

module.exports = nextConfig
