const express = require('express');
const app = express();

app.get('/v1/trainers',(req,res)=>{
    res.send('hello,world!');
});

app.post('v1/trainers',(req,res)=>{
    res.json({name:'Jz'})
});

app.listen(3000);