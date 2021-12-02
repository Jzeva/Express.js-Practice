const express = require('express')
const cors = require('./middleware/cors');
const router= require('./routes');


const app = express();

const PORT = 3000;

app.use(express.json);
app.use(cors);

app.use('/v1',router);

app.listen(PORT,()=>{
    console.log('Server listening on port 3000')
})