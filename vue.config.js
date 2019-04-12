const appDta = require('./data.json')
const seller = appDta.seller
const goods = appDta.goods
const ratings = appDta.ratings

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/index.scss";        
        `
      }
    }
  },
  devServer: {
    before(app) {
      app.get('/api/seller', function (req, res) {
        res.json({
          errno: 0,
          data: seller
        })
      })
      app.get('/api/goods', function (req, res) {
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/api/ratings', function (req, res) {
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  },

  publicPath: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined
}