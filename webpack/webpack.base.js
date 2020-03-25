const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const appName = require('../package.json').name;

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
        publicPath: `/${appName}/`,
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import'],
                },
            },
        }, {
            test: /\.(css|less)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            }, {
                loader: 'css-loader',
                options: {
                    minimize: true,
                },
            }, {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        autoprefixer({
                            browsers: ['last 15 versions'],
                        }),
                        pxtorem({
                            rootValue: 100,
                            replace: true,
                            propList: ['*'],
                        }),
                    ],
                },
            }, {
                loader: 'less-loader',
            }],
        }, {
            test: /\.(png|jpg|gif)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 5120,
                    },
                },
            ],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            name: 'index.html',
            minify: {
                minifyCSS: true,
                minifyJS: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
        }),
        new webpack.DefinePlugin({
            'process.env.PACKAGE': JSON.stringify(process.env.PACKAGE),
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css'], // 可以省略的后缀名
    },
};
