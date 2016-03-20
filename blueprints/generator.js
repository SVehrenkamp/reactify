var colors = require('colors');

var args = process.argv;
var generator_type = process.argv[2];
var generator_name = process.argv[3];

switch (generator_type) {
    case 'component': {
      var generate = require('./component/index');
      console.log(colors.green("Generating " + generator_type +" "+ generator_name));
      generate(generator_name);
    } break;
    case 'container': {
      var generate = require('./container/index');
      console.log(colors.green("Generating " + generator_type +" "+ generator_name));
      generate(generator_name);
    } break;
    case 'action': {
      var generate = require('./action/index');
      console.log(colors.green("Generating " + generator_type +" "+ generator_name));
      generate(generator_name);
    } break;
    case 'reducer': {
      var generate = require('./reducer/index');
      console.log(colors.green("Generating " + generator_type +" "+ generator_name));
      generate(generator_name);
    } break;
    default: {
      console.log(colors.red('Please enter a valid generator type!'));
    }
}
