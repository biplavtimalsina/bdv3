var mongoose=require("mongoose");

//Schema Setup
var bloodReqSchema=new mongoose.Schema({
    name:String,
    phone_number:String,
    pints:Number,
    location:String,
    bloodGroup:String
});

module.exports=mongoose.model("BloodRequest",bloodReqSchema);