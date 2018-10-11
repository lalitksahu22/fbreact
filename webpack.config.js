const webpack = require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins=[]
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template:"./src/index.html"}),
    new MiniCssExtractPlugin({
      filename: "style/[name].css",
      chunkFilename: "[id].css",
     }
)
)

module.exports = {
  entry: [
    './src/index.js',
    
  ],
 
  output: {
    path: __dirname+"/dist",
    publicPath: '/',
    filename: 'js/bundle.js'
  },
  module: {
    rules: [

      {
      exclude: /node_modules/,
      loader: 'babel-loader'
    },

    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        //MiniCssExtractPlugin.loader,
        'style-loader',
        'css-loader'
       
      ],
    },

     { test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
      loader: 'url-loader?limit=100000'
     },

     {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {}
        }
      ]
    },

    {
      test: /\.html$/,
      loader: 'html-loader'
     
    }
  ]
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  plugins: plugins,
  devtool: 'inline-source-map',
 
};
