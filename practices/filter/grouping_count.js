'use strict';

function grouping_count(collection) {

  var map = collection.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  
  return map;

}

module.exports = grouping_count;
