const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello,world');
});

app.post('v1/trainers',(res,req)=>{
    res.json({})
});

app.listen(3000);