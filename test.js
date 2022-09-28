  const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.put(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})
var num1 =Number(req.body.num1);
var num2 = Number(req.body.num2);
var result = num1 + num2 ;

app.post("/", function(req,res){
    res.send("The result of the calculator is " + result );
})

app.listen(3000,function(){
    console.log('server started on port 3000');
});