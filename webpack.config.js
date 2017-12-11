const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const extractCSS = require('./webpack/css.extract');
const css = require('./webpack/css');
const webpack = require('webpack');
//const uglifyJS = require('uglify-js');
const lintJS = require('./webpack/js.lint');
//https://loftschool.com/uploads/materials/1188_web7.pdfconst lintCSS = require('./webpack/sass.lint');
const images = require('./webpack/images');
const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build'),
};
const common = merge([
  {
    entry: {
      'index': PATHS.source + '/pages/index/index.js',
      'blog': PATHS.source + '/pages/blog/blog.js',
    },
    output: {
      path: PATHS.build,
      filename: 'js/[name].js',
    },
    devtool: 'eval',
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index','common'],
        template: PATHS.source + '/pages/index/index.pug',
      }),
      new HtmlWebpackPlugin({
        filename: 'blog.html',
        chunks: ['blog','common'],
        emplate: PATHS.source + '/pages/blog/blog.pug',
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common', 
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
    ],
  },
  pug(),
  lintJS({ paths: PATHS.sources }),
  //uglifyJS({ useSourceMap: true }),
  //lintCSS(),
  images()
]);
module.exports = function(env) {
  if (env === 'production') {
    return merge([
      common,
      extractCSS()
    ]);
  }
  if (env === 'development') {
    return merge([
      common,
      devserver(),
      sass(),
      css(),
    ]);
  }
};