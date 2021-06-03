const isGHPages = process.env.NODE_ENV === 'pages';

module.exports = {
    assetPrefix: isGHPages ? '/' : './'
};