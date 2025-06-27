/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [],
    unoptimized: false,
  },

  // Cache headers for static assets
  async headers() {
    return [
      {
        source: "/assets/images/:path*.(png|jpg|jpeg|webp|svg|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache 1 năm
          },
          {
            key: "Vary",
            value: "Accept-Encoding",
          },
        ],
      },
      {
        source: "/assets/:path*.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Content-Type",
            value: "image/svg+xml",
          },
        ],
      },
      {
        source: "/_next/image/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Vary",
            value: "Accept-Encoding",
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Compression
  compress: true,

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@mui/material", "@mui/icons-material"],
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      };
    }
    return config;
  },

  env: {
    // APP
    APP_BASE_URL: process.env.APP_BASE_URL,
    APP_GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    // DATABASE
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_URL_NON_POOLING: process.env.DATABASE_URL_NON_POOLING,

    // BIZFLY
    BIZFLY_BASE_URL: process.env.BIZFLY_BASE_URL,
    BIZFLY_API_KEY: process.env.BIZFLY_API_KEY,
    BIZFLY_API_SECRET: process.env.BIZFLY_API_SECRET,
    BIZFLY_PROJECT_TOKEN: process.env.BIZFLY_PROJECT_TOKEN,

    // SISENSE
    SISENSE_URL: process.env.SISENSE_URL,
    SISENSE_API_TOKEN: process.env.SISENSE_API_TOKEN,
    SISENSE_WAT: process.env.SISENSE_WAT,
    SISENSE_SSO_ENABLED: process.env.SISENSE_SSO_ENABLED,

    // TELEGRAM
    TELEGRAM_BOT_WEBSITE_TOKEN: process.env.TELEGRAM_BOT_WEBSITE_TOKEN,
    TELEGRAM_CHAT_ID_WEBSITE: process.env.TELEGRAM_CHAT_ID_WEBSITE,

    TELEGRAM_BOT_ERROR_TOKEN: process.env.TELEGRAM_BOT_ERROR_TOKEN,
    TELEGRAM_CHAT_ID_ERROR: process.env.TELEGRAM_CHAT_ID_ERROR,
  },
};

export default nextConfig;
