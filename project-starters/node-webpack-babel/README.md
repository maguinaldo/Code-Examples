# NodeJS + Webpack/babel
This project is to transpile ES6 to ES5

# Directions (4/3/2018)
1.) Initialize a NodeJS project `npm init`  
2.) Set up directory path
```  
.
├── dist                    # Compiled files (alternatively `dist`)  
    └── index.html            
├── src                     # Where all of your development should go  
    └── index.js            # Example file to be transpiled  
└── README.md  
```  
3.) Create a standard HTML page with a script tag to bundle.js.  This file doesn't exist yet.  We'll configure Webpack to bundle the src files and create it later.  Add a simple console log to the src/index.js file to test that Webpack was installed correctly.  Also added JQuery to help with our testing.  This can be removed later.   
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

  <script src="./libs/jQuery-3.3.1/jquery-3.3.1.min.js"></script>
  <script src="./dist/bundle.js"></script>
</body>

</html>
```  
```
$( function() console.log("mitch was here")});
```  
4.) Install webpack and dependencies
```
npm install --save-dev webpack                      # Webpack 
npm install --save-dev webpack-cli                  # CLI (was separated from main Webpack)
npm install --save path                             # NodeJS Path package
npx webpack src/index.js --output dist/bundle.js    # This is where we're telling Webpack to create the bundle.js file  
```  
