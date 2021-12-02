const express = require('express')
const cors = require('./middleware/cors');
const parseID = require('./middleware/parseId');
const { getAllTasks } = require('./controllers/tasks');
const taskRouter = require('./routes/task')


const app = express();

const PORT = 3000;

app.use(express.json);
app.use(cors);

const taskRouter = express.Router();

app.use('/tasks',taskRouter);

app.listen(PORT,()=>{
    console.log('Server listening on port 3000')
})