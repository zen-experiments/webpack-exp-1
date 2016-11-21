const PATH = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = '../';

const SRC_DIR = PATH.resolve(__dirname, ROOT, 'src/');
const INDEX_JS_FILE = PATH.resolve(SRC_DIR, 'client.js');
const INDEX_HTML_FILE = PATH.resolve(SRC_DIR, 'index.html');
const FAVICON = PATH.resolve(SRC_DIR, 'favicon.ico');

const PUBLIC_PATH = '/';
const PUBLIC_DIR = PATH.resolve(__dirname, ROOT, 'dist/');

const CACHE_DIR = PATH.resolve(__dirname, ROOT, '.cache/');

const config = {
    entry: {
        app: INDEX_JS_FILE,
        vendor: [
            'react',
            'react-dom',
            'react-router'
        ]
    },
    output: {
        filename: '[name].js',
        path: PUBLIC_DIR,
        publicPath: PUBLIC_PATH
    },
    devtool: 'source-map',
    devServer: {
        contentBase: PUBLIC_DIR,
        publicPath: PUBLIC_PATH,
        compress: true,
        watchOptions: {
            ignored: /node_modules/
        },
        inline: true,
        port: 3000,
        historyApiFallback: true,
        watchContentBase: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            cache: true,
            inject: true,
            favicon: FAVICON,
            template: INDEX_HTML_FILE,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].js'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: SRC_DIR,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: CACHE_DIR
                }
            }
        ]
    }
};

module.exports = config;
