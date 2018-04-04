# React + NodeJS + Webpack/babel (4/3/2018)
This project is to transpile ES6 to ES5.  Each section is built to have natural testing points to see if everything is working.

# Section 1: Install Webpack
1.) Initialize a NodeJS project `npm init`  
2.) Set up directory path
```  
.
├── dist                    # Compiled files (alternatively `dist`)             
├── src                     # Where all of your development should go  
    └── index.js            # Example file to be transpiled  
├── index.html
├── .gitignore              # Don't forget to set up your Source Control
└── README.md  
```  
3.) Create a standard HTML page with a script tag to bundle.js.  This file doesn't exist yet.  We'll configure Webpack to bundle the src files and create it later.  Add a simple console log to the src/index.js file to test that Webpack was installed correctly.  Also added JQuery to help with our testing.  This can be removed later.   
index.html:  
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Testing Webpack-Babel</title>
</head>

<body>

  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
  <script src="./dist/bundle.js"></script>
</body>

</html>
```  
index.js:  
```  
$(function () { console.log("Webpack installed!!!") });
```  
4.) Install webpack and dependencies
```
npm install --save-dev webpack                      # Webpack 
npm install --save-dev webpack-cli                  # CLI (was separated from main Webpack)
npm install --save path                             # NodeJS Path package
npx webpack src/index.js --output dist/bundle.js    # This is where we're telling Webpack to create the bundle.js file  
```  
5.) Now run the website and open up the console to *hopefully* see our console.log.  

# Section 2:  Have Webpack run off a configuration file  
1.) Delete dist/bundle.js to prove that Webpack runs  
2.) At root, make a webpack.config.js file  
webpack.config.js  
```  
const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.jsx',                   // Start point for the mapping process
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
module.exports = config;
```  
3.) Setup configuration file.  
```  
npx webpack --config webpack.config.js
```  
4.) Configure Webpack to run during build in the package.json (Add `{ build: webpack }` to "scripts") property)  
Example:       
```  
  "scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```  
5.) Trigger build `npm run build`

# Section 3:  Install Babel  
1.) Delete dist/bundle.js to prove that Webpack runs    
2.) Install `npm install react react-dom`  
3.) Install Babel `npm install --save-dev babel-loader babel-core`  
4.) Change src/index.js to a React component.  (Or any file that uses ES6+ features) 
index.js  
```  
import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
};

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="NEW Webpack Master" />, mountNode);
```  
5.) Add an entry point for the React component to mount to:  
index.html
```  
...
<body>

  <div id="app"></div>

  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
  <script src="./dist/bundle.js"></script>
</body>
...
```  
6.) Install Babel modules.  
```  
npm install --save-dev babel-loader babel-core
npm install babel-preset-env --save-dev
npm install babel-preset-react
npm install --save babel-preset-es2015
```  
7.) Configure Webpack to transpile using Babel.  Add `module` (transpile setup) and `devtool` (this enables source maps):  
webpack.config.js  
```  
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
```  
8.) At root, create Babel configuration file.  
.babelrc  
```  
	{
		"presets": [
			"env"
		]
	} 
```  
9.)  