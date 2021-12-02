const {getTaskById} = require('../model/tasks')

module.exports = (req,res,next) =>{
    const {id} = req.params;

    const task = getTaskById(id);

    if(!task){
        res.status(404)
    }

    return next();
}

