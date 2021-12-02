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

const updateTaskById = (req,res) =>{
    const {id} = req.params;
    const {description,done} = req.body;

    const task = Task.updateTaskById(id,{description,done});

    if(!task){
        return res.status(404).json({error:'task not found'});
   }

}

const addTask = (req,res) => {
    const {description} = req.body;

    if(!description){
        return res.status(40).json('description is missing')
    }
    const task = Task.addTask({description});

    return res.status(201).json(task);
}

const deleteTaskById = (req,res) => {
    const {id} = req.params;

    const task = Task.deleteTaskById(id);

    if(taskIndex === -1){
        return res.status(404).json({error:'task not found'});
   }

   return res.status(204);

}

module.exports = {
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,

}