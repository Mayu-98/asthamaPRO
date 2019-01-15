var mongoose = require('mongoose');

var users = mongoose.model("users", {
  FirstName : {
    type :String,
    required:true
  },
  LastName : {
    type:String,
        required:true
  },
  Email : {
    type:String,
        required:true,
          lowercase:true

  },
  Password : {
    type:String,
        required:true,
          min:8
  },
  Gender : {
    type:String,
    default:""
  },
  Birthdate : {
    type:String,
    default:""
  },
  Contact : {
    type:String,
    default:""
  },
  Location : {
    type:String,
    default:""
  },
  Feet: {
      type:String,
      default:""
  },
  Inch: {
      type:String,
        default:""
  },
  WtKg: {
      type:String,
        default:""
  },
  WtGm: {
      type:String,
        default:""
  },
  GPName:{
    type:String,
    default:""
  },
  GPNo:{
    type:String,
      default:""
  },
  CareTaker1_Name:{
    type:String,
      default:""
  },
  CareTaker1_No:{
    type:String,
      default:""
  },
  CareTaker2_Name:{
    type:String,
    default:""
  },
  CareTaker2_No:{
    type:String,
      default:""
  },
  alertbit : {
    type:Boolean,
    default:0
  },
  appointmentbit : {
    type:Boolean,
    default:0
  }

});

 module.exports = users;
