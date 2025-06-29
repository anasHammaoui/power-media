const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', 
});

const nextConfig = {
  experimental: {
  },
};

module.exports = withPWA(nextConfig);