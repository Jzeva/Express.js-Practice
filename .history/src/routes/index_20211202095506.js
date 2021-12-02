// const express = require('express');
// const taskRouter = require('./tasks');

// const router = express.Router();

// router.use('/tasks',taskRouter);

// module.exports = router;
const express = require('express');
const taskRouter = require('./tasks');

const router = express.Router();
console.log('123')

// /v1/tasks
router.use('/tasks', taskRouter);

module.exports = router;