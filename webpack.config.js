var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var writeHash = require('./src/js/utils/webpack-write-hash');
var loaders = require('./src/js/utils/webpack-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/components/Routes.js',

    output: {
        path: './build',
        filename: 'bundle.[hash].js'
    },

    module: {
        loaders: loaders
    },

    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb$/),


        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),

        new ExtractTextPlugin('bundle.[hash].css', {
            allChunks: true
        }),

        writeHash
    ],

    postcss: function() {
        return [autoprefixer, precss]
    },

    remarkable: {
        preset: 'full',
        linkify: true,
        typographer: true
    },

    devtool: 'source-map'

};