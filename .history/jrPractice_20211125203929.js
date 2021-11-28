 const express = require('express');
 const app = express();

 app.use(express.json());
 
 app.post('/tasks',(req,res)=>{
     const { description }=req.body;
     res.send ({description});
 })

 app.listen(3000,console.log('server listening on port 3000'));