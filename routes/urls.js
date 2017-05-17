const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/',(req,res,next) => {
  db.Url.findAll()
    .then (urls => {
      res.render('urls', {title: 'Shortened URL', urls:urls});
    });
});

//router.get('/edit/:shortURL', (req,res,next) => {
//  db.Url.find({where: {ShortUrl:shortURL}})
//  })
//});

module.exports = router;
