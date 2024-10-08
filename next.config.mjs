/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'donwbxifbcljkblnwsob.supabase.co',
      },
    ],
  },
  swcMinify: false,
}

export default nextConfig;
