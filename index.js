var express = require('express');

var app = express();

var bodyParser = require('body-parser');

// const responseObj = {
//     firstName : "yagnesh",
//     lastName : "patel",
//     gender : "male"
// }

app.use(bodyParser.json());

app.get('/start',function(req,res) {
    console.log("fistname:",req.query.firstName);

    const responseObj = {
        firstName : "yagnesh",
        lastName : "patel",
        gender : "male"
    }
    
    res.send(responseObj);
});

app.post('/start',function(req,res){
    console.log("Post request");
    
    console.log(req.body);
 
    res.send("Post Request");
})
app.listen(3000, 'localhost', ()=>{
    console.log("App running on port 3000");
});