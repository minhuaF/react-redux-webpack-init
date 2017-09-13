var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../build/config/webpack.config.js');

var PORT = 3333;

new WebpackDevServer(webpack(config), {
    publicPath: '/dist/',
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
}).listen(PORT, 'localhost', function(err){
    if(err ){
        console.log(err);
        return;
    }
    console.log('::: Server Running::: ==> localhost: ' + PORT);
})