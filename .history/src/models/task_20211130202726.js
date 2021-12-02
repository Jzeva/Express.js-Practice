const task = [];
let id = 0;

const addTask = ({description}) =>{
    const task = {
        id:++id,
        description,
        done:false,
    };

    task.push(task); 
}

const getAllTasks = ({description}) => {
    if(description){
        const filteredTasks = tasks.filter((i)=>
            i.description.includes(description)
        );
        return filteredTasks;
    }
    return tasks;
}

 const getById = (id) =>{
    const task = tasks.find((i).id === id);
    return task;
 }

 const updateTaskById = (id,{done,description}) =>{
     const task = getById(id);
     if(done!==undefined){
         task.done = !!done;
     }
     if(description){
         task.description = '' + task.description; 
     }
 }

 const deleteTaskById = (id) =>{
     const taskIndex = tasks.findIndex((i) => i.id === id);
     tasks.splice(taskIndex,1);
 }

 module.exports = {
    addTask,
    getById,
    getAllTasks,
    updateTaskById,
    deleteTaskById,
 }