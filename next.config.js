/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
        port: '',
        pathname:
          '/jpg/01/16/88/37/360_F_116883786_wuckft1sNw1ouQfJ6FuquZnxea3qBlxy.jpg',
      },
      {
        protocol: 'https',
        hostname: 'blog.realiseme.com',
        port: '',
        pathname: '/blog/wp-content/uploads/2017/07/RMblog_logo3-300x113.png',
      },
      {
        protocol: 'https',
        hostname: 'pr.business',
        port: '',
        pathname: '/public/images/static/features/pr-logo-new.png',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
        port: '',
        pathname:
          '/EMZ1ycZ8-UA7rbmhCzfGajwgEQoYc1fpyMkNUYtE5StCeEuVteYOC7zRXRuGBsVLBQ',
      },
    ],
  },
}

module.exports = nextConfig
