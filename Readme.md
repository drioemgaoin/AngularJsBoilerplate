This boilerplate create an Angular v1.5 web site with MVC structure.

## Installation
Clone the repository by using the following git command
```
git clone https://github.com/drioemgaoin/AngularMvcBoilerplate.git
```

Then you need to install Nodejs to be able to use npm

[NodeJs Installation](https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/installer-node-js)

To check is node is installed, run this command
```
$ node -var

// Output
v4.4.2
```

Then, you need to install bower by executing this command
```
$ npm install -g bower
```

Then you need to install the dependencies
```
$ npm install && bower install
```

Finally, to build the solution, you have two choices
- dev mode: build without minify the javascript/css
```
$ gulp default
```

- production mode: build and minify the javascript/css  
```
$ gulp default --production
```

## Description
