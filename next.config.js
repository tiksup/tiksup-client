/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    GATEWAY_URL: process.env.GATEWAY_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gqldqjebnxaxmslrgqwf.supabase.co',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
