const express = require('express,')
const cors = require('./middlewares/cors');

const app = express();

const PORT = 3000;

app.listen(3000,()=>{
    console.log('Server listening on port 3000')
})