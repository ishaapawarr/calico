/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  output: 'export', // Ensure that Next.js exports a static version of the app
  basePath: '/calico', // Replace this with your GitHub repo name
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
};

module.exports = nextConfig;
