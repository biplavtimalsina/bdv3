var mongoose= require("mongoose");
var bloodRequest=require("./models/bloodRequest");


var data=[
    {name:"Biplav",phone_number:"7756007864",pints:"3",location:"Ralston Street"},
    {name:"Shree",phone_number:"775623464",pints:"2",location:"Suave Street"},
    {name:"Ram",phone_number:"234507864",pints:"1",location:"Canvas Street"},
    {name:"Prabin",phone_number:"3234007864",pints:"5",location:"Rolls Street"}
    ];

function seedDB(){
    bloodRequest.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log("removed bloodRequests");
        data.forEach(function(seed){
            bloodRequest.create(seed,function(err,tempBloodReq){
                if(err){
                    console.log(err);
                }else{
                    console.log("Added a blood Request");
                }
            });
        });
    });
}

module.exports=seedDB;
