const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '');
const APP_DIR = path.resolve(__dirname, '');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

const config = {
    entry: [APP_DIR + '/app.js', APP_DIR + '/app.scss'],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }]
                })
            },
            {
                test: /\.js?/,
                include: APP_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'es2017']
                }
            }
        ]
    },
    plugins: [
        extractSass
    ]
};

module.exports = config;
