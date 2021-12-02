const express = require('express')
const cors = require('./middleware/cors');
const router= require('./routes');


const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})