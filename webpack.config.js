const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};
const common = {
    entry: {
    'index': PATHS.source + '/pages/index/index.js',
    'blog': PATHS.source + '/pages/blog/blog.js'
    },
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.source + '/pages/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog'],
            template: PATHS.source + '/pages/blog/blog.pug'
        })
    ],
    module: {
        rules: [
        {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
        pretty: true } 
        } 
        ] 
    } 
};
const developmentConfig = {
    devServer: {
        stats: 'errors-only'
    }
};
module.exports = function(env) {
    if (env === 'production') {
        return common;
    }
    if (env === 'development') {
        return Object.assign(
        {},
        common,
        developmentConfig
        );
    }
};
   



module.exports = {
    entry: {
        'index': PATHS.source + '/pages/index/index.js',
        'blog': PATHS.source + '/pages/blog/blog.js'
        },
    output: {
        path: PATHS.build,
        filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'blog.html',
                chunks: ['blog'],
                emplate: PATHS.source + '/pages/blog/blog.pug'
            })
        ],
    module: {
        rules: [
        {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        }
        ]
    },
    devServer: {
        stats: 'errors-only'
    }
};