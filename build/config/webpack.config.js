const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, '../../src'),
  // string | object | array
  // entry: './app/index.js',
  entry: ['./index.js'],
  // entry: {
  //   a: './app/index.js'
  // },

  output: {
    path: path.resolve(__dirname, '../../dist'), // 所有输出文件的目标路径，必须是绝对路径
    filename: '[name].bundle.js',  // 入口文件分块的文件名模板
    publicPath: '', // 自愿加载路径
    chunkFilename: '[id].[hash].bundle.js', // 决定非入口 chunk 文件的名称

    // 创建Library，构建公共部分出去给其他人使用
    // TODO 公共库的使用  
    // library: '', // 导出库的名称
    // libraryTarget: '',  // 导出库的类型

  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader',
        ],
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader', {
        //   publicPath: './css'
        // })
      }, 
      {
        test: /\.(ico|png|jpg|gif)$/,
        loaders: [
          "file-loader?name=images/[name].[hash:8].[ext]",
          // 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ],
      }, 
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css'],
    modules: [
      'node_modules',
      path.resolve(__dirname, '../../src')
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    // 按需加载的标识
    new ExtractTextPlugin('[hash]bundle.css'), // 插件将css合并为独立的文件，并自动在页面加载时向HTML header中插入 link 标签
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({    // 解决生产环境和开发环境引用路径不一样问题，HtmlWebpackPlugin支持从模板生产html文件，生成的html里边可以正确解决js打包之后的路径、文件名问题
      inject: 'body',
      version: new Date().getTime(),
      template: path.resolve(__dirname, '../../src/index.html'),
      filename: 'index.html'
    })
  ]
};
