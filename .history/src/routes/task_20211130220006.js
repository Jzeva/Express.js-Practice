const express = require('express')
const cors = require('./middleware/cors');
const checkTaskExist = require('../middleware/checkTaskExist');
const parseID = require('./middleware/parseId');
const Task = require('./controllers/tasks');

const taskRouter = express.Router();

taskRouter.get('',getAllTasks);

taskRouter.get('')

