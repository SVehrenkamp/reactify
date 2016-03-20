'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

//List Allowed Environments
const allowedEnvs = ['dev', 'dist'];

//Set the correct Environments
var env;
if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'dev';
} else if (args.env) {
  env = args.env;
} else {
  env = "dev";
}

process.env.REACT_WEBPACK_ENV = env;

const configs = {
  base: require(path.join(__dirname, 'config/base')),
  dev: require(path.join(__dirname, 'config/dev')),
};

function buildConfig(wantedEnv){
  let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  let validEnv = isValid ? wantedEnv : 'dev';
  return configs[validEnv];
}

module.exports = buildConfig(env);
