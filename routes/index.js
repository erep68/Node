var express = require('express');
    Article = require('../models/article');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Article.find({}, (err, articles) => {
    if(err){
      console.log(err);
    }else{
      res.render('index', {
        title: 'Listado de articulos',
        articles: articles
      });
    }
  });
});

module.exports = router;
