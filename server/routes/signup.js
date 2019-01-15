let express = require('express');
let router = express.Router();
var bodyParser = require('body-parser');
// var {mongoose} = require('../db/mongoose');

var {LogIn}=require('../models/users');

let app =express();

//app.use(bodyParser.json());

router.post('/Signup',(req,res) => {
  console.log("hello");
  LogIn.findOne({Email : req.body.Email}).then((todo) => {
    if(!todo) {
      var login = new LogIn ({
        Email : req.body.Email,
        Password:req.body.Password,
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        //Feet:req.body.Feet,
        //Inch:req.body.Inch
      });
      login.save().then((doc) =>{
        res.send(doc);
      },(e) => {
        res.status(400).send(e);
      });
    }
    else{
      return res.status(500).json({
      title:'Not Allowed',
      error : {message:'User already exists'}
    })
    }
  })
});

// app.listen(3000, () => {
//   console.log('Started on port 3000');
// });

module.exports = router;
