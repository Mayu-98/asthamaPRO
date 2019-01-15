let express = require('express');
let router = express.Router();
// var bodyParser = require('body-parser');
// var {mongoose} = require('../db/mongoose');
//
// var {LogIn}=require('../model/login');

let app =express();

//app.use(bodyParser.json());

router.put('/Update_profile1',(req,res) => {
  LogIn.findOneAndUpdate({'Email' : req.body.Email},{
      $set :{
        Email : req.body.Email,
        Contact:req.body.Contact,
        Birthdate:req.body.Birthdate,
        Location:req.body.Location,
        Feet:req.body.Feet,
        Inch:req.body.Inch,
        WtKg:req.body.WtKg,
        WtGm:req.body.WtGm,
        Gender:req.body.Gender,
        alertbit:0,
        appointmentbit:0
      }},{new:true}
    ).then((todo) => {
    res.status(400).json({
    title:'Updated',
    error : {message:"Updation1 Successful"}
})
})
});

router.put('/Update_profile2',(req,res) => {
  LogIn.findOneAndUpdate({'Email' : req.body.Email},{
      $set :{

        GPName:req.body.GPName,
        GPNo:req.body.GPNo,
        CareTaker1_No:req.body.CareTaker1_No,
        CareTaker1_Name:req.body.CareTaker1_Name,
        CareTaker2_No:req.body.CareTaker2_No,
        CareTaker2_Name:req.body.CareTaker2_Name,
        alertbit:req.body.alertbit,
        appointmentbit:req.body.appointmentbit
      }},{new:true}
    ).then((todo) => {
    res.status(400).json({
    title:'Updated',
    error : {message:"Updation2 Successful"}
})
})
});


module.exports = router;
