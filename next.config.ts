const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.furt1-1.fna.fbcdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  devIndicators: {
    allowedDevOrigins: [
        'http://localhost:3000',
        'https://www.vantrangforrent.com',
        'http://192.168.0.109:3000',
        'http://192.168.0.116:3000',
        'http://192.168.0.117:3000',
    ],
  },
};

export default nextConfig;