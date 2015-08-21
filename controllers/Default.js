'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.getPetsById = function getPetsById (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = Default.getPetsById(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
