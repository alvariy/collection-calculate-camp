'use strict';

function collect_min_number(collection) {
  return collection.reduce((a,b) => (a<b) ? a:b);
  //在这里写入代码
}

module.exports = collect_min_number;

