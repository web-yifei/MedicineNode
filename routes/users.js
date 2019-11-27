var express = require('express');
var router = express.Router();
const userModel = require('../model/userModel');
/* GET users listing. */
router.post('/', function(req, res, next) {
  userModel.find({
    _id:req.body.id
  }).then(result => {
    console.log(result);
    res.send({username:result[0].username,pic:result[0].pic,id:result[0]._id})
  })
});

router.post('/edit', function(req, res, next) {
  console.log(req.body);
  userModel.update({
    _id:req.body.id,
    password:req.body.oldpsw
  },{$set:{
    password:req.body.newpsw
  }}).then(result => {
    if(result.nModified === 1){
      res.send({edit:1})
    }else{
      res.send({edit:0})
    }
  })
})

module.exports = router;
