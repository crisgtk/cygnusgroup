/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'],
      unoptimized: true, 
      dangerouslyAllowSVG: true,
    },
    eslint: {
      ignoreDuringBuilds: true, // Esto desactiva ESLint durante el build
    },
    output: 'export',
  };
  
  module.exports = nextConfig;
