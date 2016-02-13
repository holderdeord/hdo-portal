import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';
import config from './../webpack.dev.config';

const staticPath = path.join(__dirname, '../build');

const server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    debug: true,
    hot: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, '/../views')
});

server.listen(3000, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:3000');
});
