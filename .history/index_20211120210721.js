const express = require('express');
const app = express();

app.get('/v1/trainers',(req,res)=>{
    res.send('hello,world!');
});

app.post('v1/trainers',(req,res)=>{
    res.send('yes');
});

app.listen(3000);