'use strict';

var express = require('express');
var handlers = require('../handlers/places');

var router = express();

module.exports = function(path) {
  router.route(path)
    .get(handlers.getAll);

  return router;
};
