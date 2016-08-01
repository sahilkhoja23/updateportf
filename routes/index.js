var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'sahil khoja - home' });
});

router.get('/work', function(req, res, next) {
  res.render('work', { title: 'sahil khoja - work' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'sahil khoja - about' });
});

router.get('/intuit', function(req,res,next){
	res.render('intuit', {title: 'sahil khoja - intuit'})
});

router.get('/uber', function(req,res,next){
	res.render('uber', {title: 'sahil khoja - uber'})
});


router.get('/function', function(req,res,next){
	res.render('function', {title: 'sahil khoja - function of beauty'})
});

router.get('/dangle', function(req,res,next){
	res.render('dangle', {title: 'sahil khoja - dangle'})
});

module.exports = router;
