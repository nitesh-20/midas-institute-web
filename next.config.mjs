/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image1.jdomni.in',
      },
      {
        protocol: 'https',
        hostname: 'image2.jdomni.in',
      },
      {
        protocol: 'https',
        hostname: 'image3.jdomni.in',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
};

export default nextConfig;
