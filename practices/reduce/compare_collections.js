'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.reduce(a => (JSON.stringify(collection_a) === JSON.stringify(collection_b)));
  //在这里写入代码
}

module.exports = compare_collections;


