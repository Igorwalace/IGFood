/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '/[path]*/**',
            },
        ],
        domains: ['firebasestorage.googleapis.com'],
    },
};

export default nextConfig;
