const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL,
  },
  rewrites() {
    return [
      {
        source: '/admin/:id*',
        destination: '/admin/:id*',
      },
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
