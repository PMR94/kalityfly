var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/pourquoi', function(req, res, next) {
  res.render('pourquoi');
});

router.get('/services', function(req, res, next) {
  res.render('services');
});

router.get('/mentions', function(req, res, next) {
  res.render('mentions');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});


module.exports = router;
