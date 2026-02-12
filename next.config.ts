import type { NextConfig } from "next";
import withPWA from '@ducanh2912/next-pwa';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
    basePath,
    assetPrefix: basePath,
    poweredByHeader: false,
    turbopack: {}, // Silence Turbopack warning with next-pwa webpack config
};

export default withPWA({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
})(nextConfig);
