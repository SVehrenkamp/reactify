'use strict';

const colors = require('colors');
const path = require('path');
const fs = require('fs');
const reducersObj = "const reducers = {";

let file = fs.readFileSync('src/reducers/index.js').toString().split('\n');

const addReducer = function(fileName){
  if (file.indexOf(reducersObj) !== -1) {
    //add reducer
    let reducerString = "  "+fileName+": require('../reducers/"+fileName+".js'),"
    let reducersObjectIndex = file.indexOf(reducersObj);
    file.splice(reducersObjectIndex+1,0,reducerString);

    fs.writeFileSync('src/reducers/index.js', file.join('\n'), 'utf8',  function(err){
      if (err) {
        throw err;
      } else {
        console.log(colors.yellow('Added reducer to reducers/index.js'));
      }
    });


  } else {
    console.log("Unable to update reducers file.");
  }
};

module.exports  = (name) => {

  const directory = path.join(__dirname, '../../src/reducers');

  //Create Reducer file
  const __reducer = require('./__reducer');
  fs.writeFileSync((directory + `/${name}.js`), __reducer(name), 'utf8', (err) => {
    if (err) throw err;
    console.log(colors.yellow(`Created ${name} reducer.js`));
  });

  //Add Reducer to reducers/index.js
  addReducer(name);

}
