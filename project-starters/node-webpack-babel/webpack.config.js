const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',                    // Start point for the mapping process
  output: {
    path: path.resolve(__dirname, 'dist'),    // Location of HTML file
    filename: 'bundle.js'
  }
};
module.exports = config;