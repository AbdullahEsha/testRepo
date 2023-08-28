/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGEING_SENDER_ID: process.env.MESSAGEING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASURMENT_ID: process.env.MEASURMENT_ID,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
