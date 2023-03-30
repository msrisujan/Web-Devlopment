const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/contact',function(req,res){
    res.send('Contact me at:srisujanbannu@gmail.com');
});

app.get('/about',function(req,res){
    res.send('I am Sri Sujan');
});

app.get('/hobbies',function(req,res){
    res.send('My hobbies are: <ul><li>Coding</li><li>Writing</li><li>Reading</li></ul>');
});

app.listen(port, () => {
  console.log("Sever is running on port 3000");
});