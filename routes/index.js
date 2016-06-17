var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
/* GET home page. */
router.get('/', function(req, res, next) {
  knex('dogs').select().then(function(dogs){
    res.render('index', {list: dogs});
  })
});
router.get('/:id', function(req, res, next){
  knex('dogs').where({id: req.params.id}).first().then(function(dog){
    res.render('detail', {dog: dog})
  })
})
router.get('/create', function(req, res, next){
  res.render('create')
});
router.get('/id/edit', function (req,res,next) {
  knex('dogs').where({id: req.params.id}).first().then(function (frog) {

  })
})
router.post('/create', function(req, res, next){
  knex('dogs').insert(req.body).then(function(){
    res.redirect('/');
  }).catch(function(err){
    console.log(err)
    next(err)
  })
})


module.exports = router;
