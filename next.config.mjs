/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
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
}

export default nextConfig
