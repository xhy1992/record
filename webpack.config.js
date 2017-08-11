/*
 * @file webpack配置文件(开发环境)
 * @author 
 * @date 2017-08-3
 */
//配置
const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const port = 3005;

module.exports = {
    devtool: '#source-map',
    entry: { //入口
        bundle: './app/main.jsx', //应用程序
        vendor: ['react', 'react-dom', 'jquery', 'react-router', 'redux'], //公共库
    },
    output: { //输出
        path: path.join(__dirname, '/build'), //绝对路径 你希望一次性打包的目录
        filename: '[name].js', //被 chunk 的 name 替换（或者，在 chunk 没有 name 时使用 id 替换）
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: { //加载器
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
        }, {
            test: /\.(css|less)$/,
            use: [
                'style-loader',
                'css-loader?#sourceMap',
                'postcss-loader',
                'less-loader',
            ],
        }, ],
    },
    plugins: [ //插件
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:${port}`
        }),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        compress: true, // 启用gzip压缩
        contentBase: path.join(__dirname, 'app'),
        port: port, // 运行端口3000
        inline: true,
        hot: true,
        historyApiFallback: true,
    },
};