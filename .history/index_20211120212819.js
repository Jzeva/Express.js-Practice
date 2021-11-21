const express = require('express');
const app = express();

app.use(express.json());

app.get('/v1/trainers',(req,res)=>{
    res.send('hello,world!');
});

app.post('/v1/tr',(req,res)=>{
    const{name}=req.body;
    res.send({name});
});

app.listen(3000);