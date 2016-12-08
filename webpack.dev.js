const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dest'),
    // 按需加载的标识
    // filename: '[hash].bundle.js',
    filename: 'bundle.js',
    chunkFilename: '[id].[hash].bundle.js',
    publicPath: '/dest/'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader', {
          publicPath: './'
      })
    }, {
      // test:/\.(png|jpg|gif)$/,
      // loader: 'file'

      // url-loader limit可是设置8kb 以下的图片编码成 base64
			// 但是页面上引用的图片并不会引用到目标文件目录中
			// test: /\.(png|jpg|gif)$/,
			// loader: 'url-loader?limit=8192'

			// 使用另一个loader的话就可以把页面上的图片自动转过去目标文件，同时修改页面上路劲，但是不能编码成base64；且页面上的图片引用写法不用变
      //image-webpack 用来压缩图片

			test: /\.(ico|png|jpg|gif)$/,
			loaders: [
        "file?name='[name].[hash:8].[ext]'",
        // 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
      ],

    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less', '.css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    // 按需加载的标识
    // new ExtractTextPlugin('[hash]bundle.css'),
    new ExtractTextPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')    
		})
  ]
};


// NODE_ENV 其实就是一个环境变量，在node中可以通过 process.env.NODE_ENV 获取，用于标识当前到底是development还是production环境