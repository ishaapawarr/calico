/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  output: 'export',
  basePath: '/calico', 
};

module.exports = nextConfig;
