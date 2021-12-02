const Task = require('../models/task'); 

const getAllTasks = (req,res) => {
    const {description} = req.query;
    const tasks = Task.getAllTasks;
    return res.json(tasks);
}