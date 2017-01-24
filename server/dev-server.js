var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var config = require('./../webpack.dev.config');

var staticPath = path.join(__dirname, '../build');

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    debug: true,
    hot: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, '/../views')
});

var port = process.env.PORT || 3000

server.listen(+port, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:' + port);
});
