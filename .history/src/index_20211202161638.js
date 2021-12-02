const express = require('express')
// const cors = require('./middleware/cors');
const cors = require('cors');
const morgan = require('morgan')
const router= require('./routes');


const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/v1',router);

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})