const { createProxyMiddleware } = require('http-proxy-middleware')

// 配置完记得重启项目
module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://chst.vip:8081',//目标地址 当做 /api 
        changeOrigin: true,
        pathRewrite: {
            "^/api": "/"
        }
    }))
}