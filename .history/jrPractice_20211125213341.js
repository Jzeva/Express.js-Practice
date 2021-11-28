const express = require("express");
const app = express();

app.use(express.json());

let tasks = [
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
  tasks.push({description, id, done });
  res.send({ description, id, done });
});

app.get('/tasks',(req,res)=>{
    res.send(tasks);
})

app.get('tasks/:id',(req,res)=>{
    const { needId } = req.params;
    const taskObj = tasks.filter((i)=>i.id===needId);
    res.send(taskObj);
})

app.listen(3000, console.log("server listening on port 3000"));
