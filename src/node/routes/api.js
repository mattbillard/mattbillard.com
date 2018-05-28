var express = require('express');
var router = express.Router();

var aboutData = require('../data/about-data');
var connectData = require('../data/connect-data');
var homeData = require('../data/home-data');
var skillsData = require('../data/skills-data');

router.get('/about', function(req, res, next) {
  res.send(aboutData);
});

router.get('/connect', function(req, res, next) {
  res.send(connectData);
});

router.get('/home', function(req, res, next) {
  res.send(homeData);
});

router.get('/skills', function(req, res, next) {
  res.send(skillsData);
});

module.exports = router;
