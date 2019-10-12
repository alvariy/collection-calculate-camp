'use strict';

function compute_average(collection) {
  let collectionSize = collection.length;
  
  return collection.reduce((a,b) => a+b) / collectionSize; 
  //在这里写入代码
}

module.exports = compute_average;

