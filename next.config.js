const canonicalHosts = [
  'www.felmon.tech',
  'felmonfekadu.com',
  'www.felmonfekadu.com',
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return canonicalHosts.map((host) => ({
      source: '/:path*',
      has: [{ type: 'host', value: host }],
      destination: 'https://felmon.tech/:path*',
      permanent: true,
    }))
  },
}

module.exports = nextConfig
