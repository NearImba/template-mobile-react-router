const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base');
const appName = require('../package.json').name;

module.exports = merge(baseConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: '[name].[chunkhash].js',
        publicPath: `/${appName}/`,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
});
