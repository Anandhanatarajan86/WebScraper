const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'https://news.yahoo.com/?fr=yhssrp_catchall',
}
})
