const express = require('express')
const checkTaskExist = require('../middleware/checkTaskExist');
const parseId = require('../middleware/parseId')
const {getAllTasks,getTaskById,addTask,updateTaskById,deleteTaskById} = require('../controllers/tasks');

const taskRouter = express.Router();

taskRouter.get('',parseId,getAllTasks);

taskRouter.get('/:id',parseId,checkTaskExist,getTaskById);

taskRouter.post('',parseId,checkTaskExist,addTask);

taskRouter.put('/:id',parseId,checkTaskExist,updateTaskById);

taskRouter.delete('/:id',parseId,checkTaskExist,deleteTaskById); 

