const express = require('express');
const app = express();

app.use(express.json());

app.get('/v1/trainers',(req,res)=>{
    res.send('hello,world!');
});

app.post('/v1/tr/:id',(req,res)=>{
    const { name }=req.body;
    const{ gender } = req.query;
    const{ id } = req.params;
    res.send({name,gender,id});
});

app.listen(3000);