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

  const directory = path.join(__dirname, '../../src/containers/' + directory_name + file_name);

  //Create Directory
  mkdirp.sync(directory, (err) => {
    if (err) throw err;
    console.log(colors.yellow('Created Directory for Container ' + name));
  });

  //Create Component and SCSS files
  var __container = require('./__container');
  fs.writeFileSync((directory + '/container.js'), __container(file_name), 'utf8', (err) => {
    if (err) throw err;
    console.log(colors.yellow('Created '+file_name+' container.js'));
  });

  var __styles = require('./__styles');
  fs.writeFileSync(directory + '/styles.scss', __styles(file_name), 'utf8', (err) => {
    if (err) throw err;
    console.log(colors.yellow('Created '+file_name+' styles.scss'));
  });

}
