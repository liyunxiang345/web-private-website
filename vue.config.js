module.exports = {
  devServer: {
    open: true
  },
  assetsDir: "static",
  filenameHashing: false, // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
}