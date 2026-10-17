import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // GitHub Pages için statik dışa aktarım.
  output: 'export',
  trailingSlash: true,
  images: {
    // Statik barındırmada Next görsel optimizasyon sunucusu olmadığından kapatılır.
    unoptimized: true,
  },
}

export default nextConfig
