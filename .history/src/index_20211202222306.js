require('dotenv').config();
const express = require('express')
// const cors = require('./middleware/cors');
const cors = require('cors');
const morgan = require('morgan')
const helmet = require('helmet');
const router= require('./routes');
const logger = require('./utils/logger')


const app = express();

const PORT = process.env.PORT||3000;

app.use(express.json());
app.use(cors());
app.use(morgan(process.env.NODE_ENV === 'dev'?'dev':'combined'));
app.use(helmet());

app.use('/v1',router);

logger.debug('debug info');

app.listen(PORT,()=>{
    logger.info(`Server listening on port ${PORT}`)
})