 const express = require('express');
 const app = express();

 app.use(express.json);
 
 app.post('/',(req,res)=>{
     const {description,id,done}=req.body;

 })

 