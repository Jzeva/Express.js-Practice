const express = require('express')
const checkTaskExist = require('../middleware/checkTaskExist');
const parseId = require('../middleware/parseId')
const debug = require('../middleware/debug')
const {
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,
    addTask,
  } = require('../controllers/tasks');
  // router
  const taskRouter = express.Router();
  
  // GET  /v1/tasks
  taskRouter.get('', getAllTasks);
  
  taskRouter.get('/:id', parseId, checkTaskExist, getTaskById);
  
  taskRouter.put('/:id', parseId, checkTaskExist, updateTaskById);
  
  taskRouter.post('', addTask);
  
  taskRouter.delete('/:id', parseId, checkTaskExist, deleteTaskById);
  
  module.exports = taskRouter;

