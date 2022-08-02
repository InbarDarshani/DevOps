//FOR DEVELOPMENT ONLY
//https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
const { createProxyMiddleware } = require('http-proxy-middleware');

const url = 'http://localhost:5000';

if (process.env.NODE_ENV === "development")
    module.exports = function (app) {
        app.use(
            '/api',
            createProxyMiddleware({
                target: url,
                changeOrigin: true
            })
        );
    };