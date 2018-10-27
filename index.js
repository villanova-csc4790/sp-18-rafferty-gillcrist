var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET TheComp home page. */
router.get('/thecomp', function(req, res) {
  res.render('thecomp', { title: 'TheComp' });
});

/* GET cart page. */
router.get('/cart', function(req, res) {
  res.render('cart', { title: 'Cart'});
});

/* GET Explore page. */
router.get('/explore', function(req, res) {
  res.render('explore', { title: 'Explore'});
});
module.exports = router;
