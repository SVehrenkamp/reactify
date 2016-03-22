'use strict';

const colors = require('colors');

const args = process.argv;
const generator_type = process.argv[2];
const generator_name = process.argv[3];

switch (generator_type) {
    case 'component': {
      let generate = require('./component/index');
      console.log(colors.green("Generating " + generator_type +" "+ generator_name));
      generate(generator_name);
    } break;
    case 'container': {
      let generate = require('./container/index');
      console.log(colors.green("Generating " + generator_type +" "+ generator_name));
      generate(generator_name);
    } break;
    case 'action': {
      let generate = require('./action/index');
      console.log(colors.green("Generating " + generator_type +" "+ generator_name));
      generate(generator_name);
    } break;
    case 'reducer': {
      let generate = require('./reducer/index');
      console.log(colors.green("Generating " + generator_type +" "+ generator_name));
      generate(generator_name);
    } break;
    default: {
      console.log(args);
      console.log(colors.red('Please enter a valid generator type!'));
    }
}
