/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  images: {
    domains: ['oaidalleapiprodscus.blob.core.windows.net'],
  },
  // config
})
