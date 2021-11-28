const express = require("express");
const app = express();

app.use(express.json());

let dTasks = [
  {
    description: "task1",
    id: 1,
    done: false,
  },
  {
    description: "task2",
    id: 2,
    done: true,
  },
];

app.post("/tasks", (req, res) => {
  const { description, id, done } = req.body;
  dTasks.push({description, id, done });
  res.send({ description, id, done });
});

app.get('/tasks',(req,res)=>{
    res.send(dTasks);
})

app.get('tasks/:id',(req,res)=>{
    const { id } = req.params;

    res.send({id});
})

app.listen(3000, console.log("server listening on port 3000"));
