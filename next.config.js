/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'],
    },
    eslint: {
      ignoreDuringBuilds: true, // Esto desactiva ESLint durante el build
    },
  };
  
  module.exports = nextConfig;
