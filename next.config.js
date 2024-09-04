const isGHPages = process.env.NODE_ENV === 'pages';

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    output: 'export',
    compiler: {
        styledComponents: true,
    },
    images: { unoptimized: true }
};