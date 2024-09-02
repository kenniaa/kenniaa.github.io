const isGHPages = process.env.NODE_ENV === 'pages';

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    output: 'export',
    assetPrefix: isGHPages ? '/' : './',
    compiler: {
        styledComponents: true,
    },
};