'use strict';

module.exports = (data) => {
  return {
    type: 'FETCHING_DATA',
    isFetching: data.isFetching || false
  };
}
