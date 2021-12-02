const express = require('express')
const cors = require('./middleware/cors');
const checkTaskExist = require('../middleware/checkTaskExist');
const parseID = require('../middleware/parseId');
const Task = require('../controllers/tasks');

const taskRouter = express.Router();

taskRouter.get('',Task.getAllTasks);

taskRouter.get('/:id', Task.getTaskById);

taskRouter.post('',Task.addTask);

