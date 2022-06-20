// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: ( process.argv.indexOf('publish') > 1 ) ? 'http://sagalbot.github.io/vue-select/' : '/',
    productionSourceMap: true
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    proxyTable: {}
  },
  umd: {
    assetsRoot: path.resolve(__dirname, '../umd'),
    assetsPublicPath: '/'
  }
}
