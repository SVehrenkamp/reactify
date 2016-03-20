'use strict';

const colors = require('colors');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

module.exports  = (name) => {
  let directory_name, file_name;
  //Set file directory names
  if (name.indexOf('/') !== -1) {
    directory_name = name.split('/')[0] +'/';
    file_name      = name.split('/')[1];
  } else {
    directory_name = '';
    file_name      = name;
  }

  const directory = path.join(__dirname, '../../src/components/' + directory_name + file_name);

  //Create Directory
  mkdirp(directory, (err) => {
    if (err) throw err;
    console.log(colors.yellow('Created Directory for Component ' + name));
  });

  //Create Component and SCSS files
  var __component = require('./__component');
  fs.writeFile((directory + '/component.js'), __component(file_name), 'utf8', (err) => {
    if (err) throw err;
    console.log(colors.yellow('Created '+file_name+' component.js'));
  });

  var __styles = require('./__styles');
  fs.writeFile(directory + '/styles.scss', __styles(file_name), 'utf8', (err) => {
    if (err) throw err;
    console.log(colors.yellow('Created '+file_name+' styles.scss'));
  });

}
