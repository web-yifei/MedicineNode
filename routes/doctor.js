var express = require('express');
var router = express.Router();
const doctorModel = require('../model/doctorModel');

router.get('/list', function (req, res, next) {
    let {limit} = req.query;
    limit=parseInt(limit)
    if (req.query.id) {
        doctorModel.find({
            id:req.query.id
        }).then(result => {
            res.send({ data: result })
        })
    }else if(limit){
        doctorModel.find({}).limit(limit).then(result => {
            res.send({ data: result })
        })
    }else{
        doctorModel.find({}).then(result => {
            res.send({ data: result })
        })
    }
})

router.get('/list/classify',function(req, res, next) {
    console.log(req.query)
    let {name} = req.query;
    doctorModel.find({
        tags:new RegExp(name,'g')
    }).then(result => {
        res.send({list:result})
    })
})


module.exports = router;