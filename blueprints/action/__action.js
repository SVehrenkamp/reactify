module.exports = function (action){

  return (
`'use strict';

module.exports = function(data) {
  return {type: '${action}', data: data};
}
`);

}
