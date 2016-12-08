const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dest'),
    filename: '[hash].bundle.js',
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
        "file?name=[name].[hash:8].[ext]",
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
    new webpack.optimize.UglifyJsPlugin(), // 代码上线时操作：压缩javascript
    new ExtractTextPlugin('[hash]bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({    // 解决生产环境和开发环境引用路径不一样问题，HtmlWebpackPlugin支持从模板生产html文件，生成的html里边可以正确解决js打包之后的路径、文件名问题
      inject: true,
      version: new Date().getTime(),
      template: './index.ejs',
      filename: './index.html'
    })
  ]
};

// 年度好文
// http://hustlzp.com/post/2016/03/react-redux-deployment