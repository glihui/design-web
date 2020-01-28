module.exports = {
    publicPath: './',
    productionSourceMap: true,
    lintOnSave: true,
    runtimeCompiler: true,
    devServer: {
        proxy: {
            '/': {
                // target: 'http://blog.test',
                target: 'http://www.guolh.com',
                changeOrigin: true,
                ws: false,
            }
        }
    }
}