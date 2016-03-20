'use strict';

const colors = require('colors');
const path = require('path');
const fs = require('fs');

module.exports  = (name) => {

  const directory = path.join(__dirname, '../../src/reducers');

  //Create Component and SCSS files
  var __reducer = require('./__reducer');
  fs.writeFileSync((directory + `/${name}.js`), __reducer(name), 'utf8', (err) => {
    if (err) throw err;
    console.log(colors.yellow(`Created ${name} reducer.js`));
  });


}
