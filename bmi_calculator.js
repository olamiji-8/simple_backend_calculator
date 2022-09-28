const express = require("express");
const bodyParser = require("body-parser");
const { SelectionDirection } = require("monaco-editor");

const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/bmi_calculator.js");
});

app.post("/", function(req,res){
    res.send("You have been accepted");
});

app.listen(3000 , function(){
    console.log("You are on port 3000");
});
    

