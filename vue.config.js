const VUE_APP_MODE =
  process.env.VUE_APP_MODE !== 'development' ? 'production' : 'development'

module.exports = {
  configureWebpack: {
    mode: VUE_APP_MODE,
  },
  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(1000000).maxAssetSize(1000000)
  },
  publicPath: VUE_APP_MODE === 'production' ? '/app-name' : '/',
  devServer:
    VUE_APP_MODE !== 'production'
      ? {
          proxy: {
            '/app-name/api': {
              target: 'http://localhost:8080',
              changeOrigin: true,
            },
          },
        }
      : {},
}
