const express = require('express')
const checkTaskExist = require('../middleware/checkTaskExist');
const parseId = require('../middleware/parseId');
const Task = require('../controllers/tasks');
const parseID = require('../middleware/parseId');

const taskRouter = express.Router();

taskRouter.get('',parseID,Task.getAllTasks);

taskRouter.get('/:id', Task.getTaskById);

taskRouter.post('',Task.addTask);

taskRouter.put('/:id',Task.updateTaskById);

taskRouter.delete('/:id',Task.deleteTaskById); 

