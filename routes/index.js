var express = require('express');
var router = express.Router();
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
});

router.get('/bl/:shortURL', function(req,res,next) {
  let shortURL = req.params.shortURL;
  db.Url.find({where: {ShortUrl:shortURL}})
    .then (url => {
      let addCount = url.click_count + 1 || 0;
      url.update({click_count: addCount});
      res.redirect(url.Url);
    });
});

module.exports = router;
