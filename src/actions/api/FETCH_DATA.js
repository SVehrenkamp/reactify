'use strict';

module.exports = (data) => {
  return {
    type: 'FETCH_DATA',
    status: data.status || null,
    response: data.response || null
  };
}
