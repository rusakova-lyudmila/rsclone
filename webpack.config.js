const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const webPack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/assets/js/index.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'src'),
  },

  devtool: NODE_ENV === 'development' ? 'inline-source-map' : null,

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  resolve: {
    extensions: ['.js'],
  },

  plugins: [
    new webPack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader: 'file-loader',
        }],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
