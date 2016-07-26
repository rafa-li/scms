var express = require('./config/express');
var mongoose = require('./config/mongoose');

var db = mongodb();

var app = express();

module.exports = app;