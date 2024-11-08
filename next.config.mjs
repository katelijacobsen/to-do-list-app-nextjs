/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, 
  },
  assetPrefix: isProd ? '/katelijacobsen/' : '',
  basePath: isProd ? '/to-do-list-app-nextjs' : '',
  output: 'export'
};

export default nextConfig;
