'use strict';

const colors = require('colors');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

module.exports  = (action) => {
  let directory_name, action_type, dest;
  //Set file directory names
  if (action.indexOf('/') !== -1) {
    directory_name = action.split('/')[0] +'/';
    action_type    = action.split('/')[1];

  } else {
    directory_name = '';
    action_type    = action;
  }

  const directory = path.join(__dirname, '../../src/actions/' + directory_name);

  //Create Directory
  mkdirp.sync(directory, (err) => {
    if (err) throw err;
  });

  //Create Component and SCSS files
  var __action = require('./__action');
  fs.writeFileSync((directory + '/'+action_type+'.js'), __action(action_type), 'utf8', (err) => {
    if (err) throw err;
    console.log(colors.yellow('Created '+action));
  });


}
