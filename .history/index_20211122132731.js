const express = require('express');
const app = express();

app.use(express.json());

app.get('/v1/trainers',(req,res)=>{
    res.send('hello,world!');
    //res.status(201).send();
});

app.post('/v1/tr/:id',(req,res)=>{
    const { name }=req.body;
    const{ gender } = req.query;//?aaa=bbb
    const{ id } = req.params;//：id
    res.send({name,gender,id});
});



app.listen(3000);