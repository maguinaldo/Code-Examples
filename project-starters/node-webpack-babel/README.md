# NodeJS + Webpack/babel (4/3/2018)
This project is to transpile ES6 to ES5.  Each section is built to have natural testing points to see if everything is working.

# Section 1:  
1.) Initialize a NodeJS project f`npm init`  
2.) Set up directory path
```  
.
├── dist                    # Compiled files (alternatively `dist`)             
├── src                     # Where all of your development should go  
    └── index.js            # Example file to be transpiled  
├── index.html
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
6.) 
