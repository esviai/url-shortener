var express = require('express');
var router = express.Router();
const db = require('../models');

router.get('/', function(req,res,next) {
  res.render('create',{title: 'Shortened URL'});
});

router.post('/', function(req,res,next) {
  let url = req.body.url;
  db.Url.create({'Url':url})
    .then(() => {
      res.redirect('/urls');
    });
});

module.exports = router;
