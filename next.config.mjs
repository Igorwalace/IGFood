/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['s3-alpha-sig.figma.com'],
        domains: ['firebasestorage.googleapis.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                pathname: '/[path]*/**',
            },
        ],
        domains: ['lh3.googleusercontent.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '/[path]*/**',
            },
        ],
    },
};

export default nextConfig;
