var express = require('express');
var router = express.Router();
var helper = require('../helpers/util.js');
const db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Url.findAll()
  .then (urls => {
    res.render('index', {title: 'Shortened URL', urls: urls});
  });
});

router.post('/', function(req, res, next) {
  let url = req.body.url;
  db.Url.create({'Url': url})
    .then( () => {
      res.redirect('/');
    });
  //res.render('index',{ title: `Your shortened URL is ${shortURL}`});
});
module.exports = router;

router.get('/:shortURL', function(req,res,next) {
  let shortURL = req.params.shortURL;
  db.Url.find({where: {ShortUrl:shortURL}})
    .then (url => {
      let addCount = url.click_count + 1;
      url.update({click_count: addCount});
      res.redirect(url.Url);
    });
});
