const express = require('express');
const taskRouter = require('./tasks');

const router = express.Router();

router.use('/tasks',taskRouter);
console.log("router works")
module.exports = router;