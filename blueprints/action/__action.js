module.exports = (action) => {

  return (
`'use strict';

module.exports = (data) => {
  return {type: '${action}', data: data};
}
`);

}
