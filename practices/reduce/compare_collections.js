'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.reduce(a => (collection_a === collection_b) ? true:false);
  //在这里写入代码
}

module.exports = compare_collections;


