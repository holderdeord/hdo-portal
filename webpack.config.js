var autoprefixer = require('autoprefixer')
var precss = require('precss')

module.exports = {
    entry: './src/js/components/Routes.js',

    output: {
        path: './build',
        filename: 'bundle.js'
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

    postcss: function() {
        return [autoprefixer, precss]
    },

    remarkable: {
        preset: 'full',
        linkify: true,
        typographer: true
    }

};