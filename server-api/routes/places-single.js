'use strict';

var express = require('express');
var handlers = require('../handlers/places');

var router = express();

exports = module.exports = function(path) {
  router.route(path)
    .get(handlers.get)

  return router;
};
