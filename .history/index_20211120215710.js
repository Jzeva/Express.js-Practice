const express = require('express');
const app = express();

app.use(express.json());

app.get('/v1/trainers',(req,res)=>{
    res.send('hello,world!');
});

app.post('/v1/tr',(req,res)=>{
    const { name }=req.body;
    const{ gender } = req.query;
    res.send({name,gender});
});

app.listen(3000);