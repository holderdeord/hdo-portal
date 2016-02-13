var autoprefixer = require('autoprefixer')
var precss = require('precss')
var fs = require('fs')
var writeHash = require('./src/js/utils/webpack-write-hash')

module.exports = {
    entry: './src/js/components/Routes.js',

    output: {
        path: './build',
        filename: 'bundle.[hash].js'
    },

    module: {
        loaders: [
            { test: /\.scss$/, loader: 'style!css!postcss!sass' },
            { test: /\.css$/, loader: 'style!css' },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },

            {
                test:   /\.md$/,
                loader: 'html!remarkable'
            },

            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    plugins: [
        // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb$/),
        // new ExtractTextPlugin('bundle.[hash].css'),
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