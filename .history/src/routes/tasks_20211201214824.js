const express = require('express')
const checkTaskExist = require('../middleware/checkTaskExist');
const parseId = require('../middleware/parseId')
const Task = require('../controllers/tasks');

const taskRouter = express.Router();

taskRouter.get('',parseId,Task.getAllTasks);

taskRouter.get('/:id',parseId,checkTaskExist,Task.getTaskById);

taskRouter.post('',parseId,checkTaskExist,Task.addTask);

taskRouter.put('/:id',parseId,checkTaskExist,Task.updateTaskById);

taskRouter.delete('/:id',parseId,checkTaskExist,Task.deleteTaskById); 
console.log("router works")
module.exports = taskRouter;

