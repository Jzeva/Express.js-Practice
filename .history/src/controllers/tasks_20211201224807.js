const Task = require('../model/tasks'); 
console.log("this part is ok");
const getAllTasks = (req,res) => {
    const {description} = req.query;
    const tasks = Task.getAllTasks({description});
    console.log("1");
    return res.json(tasks);
}

const getTaskById = (req,res) => {
    const {id} = req.params;
    const task = Task.getById(id);
   return res.json(task); 
}

const updateTaskById = (req,res) =>{
    const {id} = req.params;
    const {description,done} = req.body;

    const task = Task.updateTaskById(id,{description,done});

    return res.json(task);
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


   return res.status(204);

}

module.exports = {
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,
    addTask,

}