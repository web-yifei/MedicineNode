var express = require('express');
var router = express.Router();
const commentModel = require('../model/commentModel');

router.get('/shop', function (req, res, next) {
    console.log(req.query);
    commentModel.find({shopId:req.query.shopId}).then(result => {
        res.send(result)
    })
})

router.get('/user', function (req, res, next) {
    console.log(req.query);
    commentModel.find({userId:req.query.userId}).then(result => {
        res.send(result)
    })
})

router.post('/insert',function(req, res, next) {
    console.log(req.body);
    
    commentModel.create({
        content:req.body.content,
        userId:req.body.userId,
        shopId:req.body.shopId,
        username:req.body.username
    }).then(result => {
        res.send({insert:1})
    })
})


module.exports = router;