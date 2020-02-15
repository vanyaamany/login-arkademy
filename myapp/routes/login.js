var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/login', { title: 'page baru' });
});

var users=require('../model/user');

router.post('/',async function(req,res){
  const{body}=req;
  users,authlogin(body, function(err,result){
    res.send({
      result,
      error:err
    })
  })
})

module.exports = router;