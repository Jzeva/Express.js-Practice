const express = require('express')
const checkTaskExist = require('../middleware/checkTaskExist');
const parseId = require('../middleware/parseId');
const Task = require('../controllers/tasks');

const taskRouter = express.Router();

taskRouter.get('',parseId,Task.getAllTasks);

taskRouter.get('/:id',parseId,,checkTaskExist,Task.getTaskById);

taskRouter.post('',Task.addTask);

taskRouter.put('/:id',Task.updateTaskById);

taskRouter.delete('/:id',Task.deleteTaskById); 

