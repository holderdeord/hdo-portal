var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer')
var precss = require('precss')

var writeHash = require('./src/js/utils/webpack-write-hash')

module.exports = {
    devtool: 'eval',

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/js/components/Routes'
    ],

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            { test: /\.scss$/, loader: 'style!css!postcss!sass' },
            { test: /\.css$/, loader: 'style!css' },

            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            },

            {
                test:   /\.md$/,
                loader: 'html!remarkable'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        writeHash
    ],

    postcss: function() {
        return [autoprefixer, precss]
    },

    remarkable: {
        preset: 'full',
        linkify: true,
        typographer: true
    }

};