# ES6-Node [![Build Status](https://travis-ci.org/PyColors/ES6-Node.svg?branch=master)](https://travis-ci.org/PyColors/ES6-Node)

A full Native JavaScript + Node JS project.

### Tech

ES6-Node uses a number of open source projects to work properly:

* [Node.js] - JavaScript runtime 
* [Webpack] - Bundle assets scripts
* [Eslint] - Pluggable JavaScript linter
* [Babel] - The compiler for writing next generation JavaScript
* [MongoDB] - The MongoDB Database 
* [Mongoose] - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment
* [Material Components for the web] - Modular and customizable Material Design UI components for the web
* [Prettier] - An opinionated code formatter.


And of course Choose your iPhone itself is open source with a [public repository][dill]
 on GitHub.

### Installation

ES6-Node requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies.

```sh
$ cd in project
$ yarn install
```

### Start the server

Start the local server on with livereload by webpack: `port:4000`

```sh
$ yarn start
```

### Test

###### Run tests with Mocha.

```sh
$ yarn test
```

### Lint

###### Run lint with ESLint and Prettier

```sh
$ yarn lint
```

### MongoDB

###### Run this command into your mongo folder

```sh
$  ./mongod 
```

###### if `data directory/data/db/ not found` you may have to run these commands:

```sh
$  sudo mkdir -p /data/db 
$  sudo chmod 777 /data/db 
```


[//]: #
   [Webpack]: <https://github.com/webpack/webpack>
   [Node.js]: <https://github.com/nodejs/node>
   [Eslint]: <https://eslint.org/>
   [Babel]: <https://babeljs.io/>
   [MongoDB]: <https://github.com/mongodb/mongo>
   [Mongoose]: <https://github.com/Automattic/mongoose>
   [Material Components for the web]: <https://github.com/material-components/material-components-web>
   [Prettier]: <https://github.com/prettier/prettier>
  
   
  
   
  
