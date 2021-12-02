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

module.exports = {
    getAllTasks
}