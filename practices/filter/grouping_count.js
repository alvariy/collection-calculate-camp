'use strict';

function grouping_count(collection) {

  // collection.

  // let grouping = {};
  // let distinctValues;
  // let countValues;

  // distinctValues = collection.filter((n,i,a) => a.indexOf(n) === i);
  // countValues = distinctValues.reduce(m => {
  //   collection.includes(m);
  //   return  
  // },0);

  var map = collection.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});

  // grouping[distinctValues[0]] = 6;

  return map;

  //write code here
}

module.exports = grouping_count;
