const express = require('express,')
const cors = require('./middlewares/cors');

const app = express();

const PORT = 3000;

app.use(express.json);
app.use(cors);

const taskRouter = express.Router();

app.get('./tasks',(req,res)=> {
    const {description} = req.query;
    if(description){
        const filteredTasks = tasks.filter((i)=>
            i.description.includes(description)
        );
        return res.json(filteredTasks);
    }
    return res.json(tasks);
})

app.get('/tasks/:id',parseID,(req,res)=>{
    const {id} = req.params;
    const task = tasks.find((i).id === id);
    if(!task){
        
    }
})

app.listen(3000,()=>{
    console.log('Server listening on port 3000')
})