/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: "MetropolitianAreaNetwork"
  },
  i18n: {
    locales: ["en-US", "hi", "es-ES"],
    defaultLocale: "en-US",
  }
}

module.exports = nextConfig
