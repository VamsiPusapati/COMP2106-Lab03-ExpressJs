var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My World' });
});

/* GET Vamsi page. */
router.get('/vamsi', function(req, res, next) {
  res.render('vamsi', { title: 'Vamsi' });
});

/* GET Sasi page. */
router.get('/sasi', function(req, res, next) {
  res.render('sasi', { title: 'Sasi' });
});

/* GET Eswari page. */
router.get('/eswari', function(req, res, next) {
  res.render('eswari', { title: 'Eswari' });
});

/* GET Reddy page. */
router.get('/reddy', function(req, res, next) {
  res.render('reddy', { title: 'Reddy' });
});

module.exports = router;
