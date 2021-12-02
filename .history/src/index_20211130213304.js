const express = require('express')
const cors = require('./middleware/cors');
const parseID = require('./middleware/parseId');
const { getAllTasks } = require('./controllers/tasks');


const app = express();

const PORT = 3000;

app.use(express.json);
app.use(cors);

const taskRouter = express.Router();

taskRouter.get('./tasks',getAllTasks);

app.get('/tasks/:id',parseID,(req,res)=>{
    const {id} = req.params;
    const task = tasks.find((i).id === id);
    if(!task){
         return res.status(404).json({error:'task not found'});
    }
    return res.json(task);
})

app.post('/tasks',(req,res)=>{
    const {description} = req.body;

    //description && isString && still have value after trim()
    if(!description){
        return res.status(404).json({error:'description is missing'});
    }

    const task = {
        id:++id,
        description,
        done:false,
    }

    tasks.push(task);

    return res.status(201).json(task);    
})

app.put('/:id',parseID,(req,res)=>{
    const {id} = req.params;
    const{description,done} = req,body;

    if(!task){
        return res.status(404).json("task not found")
    }

    return res.json(task);
})

app.delete('/tasks/:id',parseID,(req,req)=>{
    const {id} = req.params;

    const tasksIndex = tasks.findIndex(
        (i)=>i.id ===id
    );
    if(tasksIndex=== -1){
        return res.status(404).json(
            {error:'task not found'}
        );
    }

    tasks.splice(tasksIndex,1);
    res.sendStatus(204);

})

app.listen(PORT,()=>{
    console.log('Server listening on port 3000')
})