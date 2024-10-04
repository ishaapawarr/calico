/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
};

module.exports = {
  output: 'export',
  // If your GitHub Pages site is hosted in a subdirectory, specify the `basePath`
  // basePath: '/your-repo-name',
};
