const path = require('path'),
webpack = require('webpack'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
merge = require('webpack-merge'),
pug = require('./webpack/pug'),
devserver = require('./webpack/devserver'),
sass = require('./webpack/sass'),
extractCSS = require('./webpack/css.extract'),
css = require('./webpack/css'),
fonts = require('./webpack/fonts'),
lintJS = require('./webpack/js.lint'),
UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
lintCSS = require('./webpack/sass.lint'),
images = require('./webpack/images'),
PATHS = {
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
      new UglifyJsPlugin({
        sourceMap: true
      }),
    ],
  },
  pug(),
  lintJS({ paths: PATHS.sources }),
  lintCSS(),
  fonts(),
  images()
]);
console.log(fonts);
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
      css()
    ]);
  }
};