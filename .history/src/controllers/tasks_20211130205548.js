const Task = require('../models/task'); 

const getAllTasks = (req,res) => {
    const {description} = req.query;
    const tasks = Task.getAllTasks;
    return res.json(tasks);
}

const getTaskById = (req,res) => {
    const {id} = req.params;
    const task = Task.getById(id);
    if(!task){
        return res.status(404).json({error:'task not found'});
   }
   return res.json(task); 
}

const updateTaskById = () =>{
    const {id} = req.params;
    const {description,done} = req.body;

    const task = Task.updateTaskById(id,{description,done});

    if(!task){
        return res.status(404).json({error:'task not found'});
   }

}

module.exports = {
    getAllTasks,
    getTaskById,
    updateTaskById,
}