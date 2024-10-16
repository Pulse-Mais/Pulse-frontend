/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'via.placeholder.com'
          },
          {
            protocol: 'https',
            hostname: 'github.com'
          }
        ],
      },
      // reactStrictMode: false
};

export default nextConfig;
