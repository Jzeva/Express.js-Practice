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

const 