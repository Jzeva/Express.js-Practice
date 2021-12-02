const express = require('express')
const cors = require('./middleware/cors');
const checkTaskExist = require('../middleware/checkTaskExist');
const parseID = require('./middleware/parseId');
const { getAllTasks } = require('./controllers/tasks');

