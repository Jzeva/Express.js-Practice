 const express = require('express');
 const app = express();

 app.use(express.json);
 
 app.post('/tasks',(req,res)=>{
     const {description,id,done}=req.body;
    res.send ("{description,id,done}");
 })

 app.listen(3001,console.log('server listening on port 3001'));