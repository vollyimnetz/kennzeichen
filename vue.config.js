const webpack = require('webpack');
module.exports = {
  pwa: {
    name: 'Kennzeichen',
    workboxOptions: {
      skipWaiting: true
    }
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