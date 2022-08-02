//https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
const { createProxyMiddleware } = require('http-proxy-middleware');

const url = process.env.API || 'http://localhost:5000';

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: url,
            changeOrigin: true
        })
    );
};