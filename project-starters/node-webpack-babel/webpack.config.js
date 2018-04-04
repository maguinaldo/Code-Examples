const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/index.js',                    // Start point for the mapping process
    output: {
        path: path.resolve(__dirname, 'dist'),  // Location of HTML file
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,            // Grab JS/JSX files
                exclude: /node_modules/,
                loader: 'babel-loader',         // "use" for several | "loader" for single
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    devtool: "eval-source-map"
};
module.exports = config;