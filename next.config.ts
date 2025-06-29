const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  experimental: {
  },
};

module.exports = withPWA(nextConfig);