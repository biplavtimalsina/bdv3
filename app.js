var express=require("express");
var bodyParser=require("body-parser");
var app=express();
var mongoose=require("mongoose");
var BloodRequest=require("./models/bloodRequest");
var seedDB=require("./seed");

seedDB();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/bloodbase");

app.get("/", function(req,res){
    res.render("./index");
});

app.get("/request",function(req,res){
    BloodRequest.find({},function(err,bloodRequest){
        if(err){
            console.log(err);
        }else{
            res.render("./requests/requests",{bloodReq:bloodRequest});
        }
    });
});

app.get("/json",function(req,res){
    BloodRequest.find({},function(err,bloodRequest){
        if(err){
            console.log(err);
        }else{
            res.render("./requests/json",{bloodReq:bloodRequest});
        }
    });
    //res.send("ss page");
});

app.get("/request/new",function(req,res){
    res.render("./requests/new");
});

app.get("/about",function(req,res){
    res.render("./about");
});

app.post("/request",function(req,res){
    //get data from Form and add to the bloodReq array
    console.log(req.body.req);
    //save the new request to the database
    BloodRequest.create(req.body.req,function(err,newBloodRequest){
        if(err){
            console.log(err);
        }else{
            //redirect back to the requests page
            res.redirect("./request");
        }
    });
 });
 
//listen to port
app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Blog app starting..."); 
});