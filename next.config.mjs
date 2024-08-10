/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
      },
    reactStrictMode: true,    
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'popi.stagingaja.com',
            },
        ],
    },
};

export default nextConfig;
