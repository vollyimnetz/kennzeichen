const webpack = require('webpack');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');

let settings = {
  publicPath: '/kennzeichen/',
  outputDir: 'docs',

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'APP_VERSION_DATE': JSON.stringify(new Date()),
      })
    ]
  }
};


if(process.env.NODE_ENV === 'production') {
  settings.configureWebpack.plugins.push(
    new WebpackPwaManifest({
      name: 'Kennzeichen',
      short_name: 'Kennzeichen',
      inject: true,
      orientation: "portrait",
      background_color: '#000000',
      theme_color: '#4DBA87',
      icons: [
        {
          src: path.resolve('src/assets/logo.png'),
          sizes: [192, 512], // multiple sizes,
          destination: path.join('img','icons')
        }, {
          src: path.resolve('src/assets/icons/android-maskable.png'),
          sizes: [192, 512], // multiple sizes
          purpose: 'maskable',
          destination: path.join('img','icons','android')
        }, {
          src: path.resolve('src/assets/logo.png'),
          size: 1024,
          destination: path.join('img','icons', 'ios'),
          ios: 'startup'
        }
      ],
      ios: {
        'apple-mobile-web-app-title': 'Kennzeichen',
        'apple-mobile-web-app-status-bar-style': 'default',
        'apple-mobile-web-app-capable': 'no'
      },
      crossorigin:"use-credentials",
      start_url: ".",
    })
  );

  
  
  settings.configureWebpack.plugins.push(
    new InjectManifest({
      swSrc: path.resolve('public/service-worker.js'),
      swDest: path.resolve('docs/service-worker.js'),
    })
  )
}

module.exports = settings;