const {getTaskById} = require('../model/tasks')

module.exports = (req,res,next) =>{
    const {id} = req.params;

    const task = getTaskById(id);

    if(!task){
        res.status(401).json('task not found');
    }
}