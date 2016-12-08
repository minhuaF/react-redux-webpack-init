var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var fs = require('fs');
fs.createReadStream('./dev.html').pipe(fs.createWriteStream('./index.html'));

var PORT = 3333;

new WebpackDevServer(webpack(config), {
    publicPath: '/dest/',
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
}).listen(PORT, '192.168.1.123', function(err){
    if(err ){
        console.log(err);
        return;
    }
    console.log('::: Server Running::: ==> 192.168.1.123: ' + PORT);
})