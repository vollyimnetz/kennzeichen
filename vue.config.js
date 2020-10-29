const webpack = require('webpack');
module.exports = {
  pwa: {
    name: 'Kennzeichen'
  },
  
  publicPath: '/kennzeichen/',
  outputDir: 'docs',
  
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'APP_VERSION_DATE': JSON.stringify(new Date()),
      })
    ]
  }
}