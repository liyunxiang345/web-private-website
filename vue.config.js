module.exports = {
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://cloudsor.site/',
        /* 允许跨域 */
        changeOrigin: true,
      },
    },
  },
  assetsDir: "static",
  filenameHashing: false, // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
}