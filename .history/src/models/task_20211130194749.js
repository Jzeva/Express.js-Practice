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