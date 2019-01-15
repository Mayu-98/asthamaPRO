var express = require('express');
var router = express.Router();

var {LogIn} = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
    LogIn.findOne({Email : req.body.Email}).then(function(todo){
        res.send(JSON.stringify(todo,undefined,2));
    },function(err){
        console.log('Unable to fetch Onboarding' ,err)
    });
});

module.exports = router;
