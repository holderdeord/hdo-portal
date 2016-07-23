var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
       test: /\.scss$/,
       loader: ExtractTextPlugin.extract('style-loader', 'css!postcss!sass-loader?sourceMap')
    },

    {
       test: /\.css$/,
       loader: ExtractTextPlugin.extract('style-loader', 'css!postcss?sourceMap')
    },

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
    },

    {
        test: /\.(jpe?g|png|gif|svg|topojson|geojson)$/,
        loader: 'url'
    }
];