'use strict';

exports.getPetsById = function(id) {

  var examples = {};
  
  examples['application/json'] = [ {
  "name" : "aeiou",
  "tag" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
