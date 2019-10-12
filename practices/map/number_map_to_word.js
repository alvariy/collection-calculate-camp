'use strict';
var number_map_to_word = function(collection){
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f','g','h','i',
'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

  return collection.map(num => alphabet[num - 1]);
};

module.exports = number_map_to_word;
