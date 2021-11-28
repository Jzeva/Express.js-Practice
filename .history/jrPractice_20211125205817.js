 const express = require('express');
 const app = express();

 app.use(express.json());
 
let tasks = [{},{}];


 app.post('/tasks',(req,res)=>{
     const { description,id,done }=req.body;
     res.send ({description,id,done});
 })

 app.get()



 app.listen(3000,console.log('server listening on port 3000'));