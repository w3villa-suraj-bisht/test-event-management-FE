const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER;
  const isProduction =
    phase === PHASE_PRODUCTION_BUILD && process.env.NODE_ENV === "production";
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.NODE_ENV === "staging";

  return {
    reactStrictMode: false,
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
    env: {
      NEXT_PUBLIC_API_URL: isDevelopment
        ? "/"
        : "/",

      NEXT_PUBLIC_ENV: isDevelopment
        ? "development"
        : isProduction
        ? "production"
        : "staging",
    },
  };
};

module.exports = nextConfig;
