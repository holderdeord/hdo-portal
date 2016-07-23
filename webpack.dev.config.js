var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer')
var precss = require('precss')

var writeHash = require('./src/js/utils/webpack-write-hash')
var loaders = require('./src/js/utils/webpack-loaders')

var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        loaders: loaders
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('bundle.css', {allChunks: true}),
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