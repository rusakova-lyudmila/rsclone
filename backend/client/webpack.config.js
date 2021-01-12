// eslint-disable-next-line no-undef
const path = require('path');
// eslint-disable-next-line no-undef
const HTMLWebpackPlugin = require ('html-webpack-plugin');
// eslint-disable-next-line no-undef
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');
// eslint-disable-next-line no-undef
const CopyWebpackPlugin = require ('copy-webpack-plugin');
// eslint-disable-next-line no-undef
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line no-undef
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
// eslint-disable-next-line no-undef
const TerserWebpackPlugin = require('terser-webpack-plugin');


// eslint-disable-next-line no-undef
const isDev = process.env.NODE_ENV === 'development';
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
const optimization = () =>{
    const config = {
        splitChunks: {
            chunks: 'all'
        } 
    };    

    if(!isDev){
        config.minimizer = [
            new OptimizeCssAssetPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config 
};
const cssLoaders = (extra) => {
    const loaders = [ 
        {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '/'
        },
      }, 'css-loader'];

      if (extra) loaders.push(extra);
    return loaders;
};



// eslint-disable-next-line no-undef
module.exports = {
    // eslint-disable-next-line no-undef
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './js/index.js']
    },
    output: {
        filename: filename('js'),
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname,'dist'),
    },
    devtool: isDev ? 'inline-source-map' : null,
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({ 
            patterns: [
                {
                     // eslint-disable-next-line no-undef
                     from: path.resolve(__dirname, './src/assets/img/favicon.ico'),
                      // eslint-disable-next-line no-undef
                      to: path.resolve(__dirname, 'dist/favicon.ico') 
                },
                {
                    // eslint-disable-next-line no-undef
                    from: path.resolve(__dirname, './src/assets/img/'),
                     // eslint-disable-next-line no-undef
                     to: path.resolve(__dirname, 'dist/assets/img/') 
               },
            ] 
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/img/[name].[ext]',
                      },
                }],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/fonts/[name].[ext]',
                      },
                }],
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    }
}