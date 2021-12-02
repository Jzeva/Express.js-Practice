// const tasks = [];
// let id = 0;

// const addTask = ({description}) =>{
//     const task = {
//         id:++id,
//         description,
//         done:false,
//     };

//     tasks.push(task); 

//     return task; 
// }

// const getAllTasks = ({description}) => {
//     if(description){
//         const filteredTasks = tasks.filter((i)=>
//             i.description.includes(description)
//         );
//         return filteredTasks;
//     }
//     console.log("1");
//     return tasks;
// }

//  const getById = (id) =>{
//     const task = tasks.find((i).id === id);
//     return task;
//  }

//  const updateTaskById = (id,{done,description}) =>{
//      const task = getById(id);
//      if(done!==undefined){
//          task.done = !!done;
//      }
//      if(description){
//          task.description = '' + task.description; 
//      }
//  }

//  const deleteTaskById = (id) =>{
//      const taskIndex = tasks.findIndex((i) => i.id === id);
//      tasks.splice(taskIndex,1);
//  }

//  module.exports = {
//     addTask,
//     getById,
//     getAllTasks, 
//     updateTaskById,
//     deleteTaskById,
//  }

let id = 0;
const tasks = [{
  id,
  description:"test",
  done:false,
}];


// {description: ’‘}
// addTask('',undefined, 'timestamp')
function addTask({ description }) {
  const task = {
    id: ++id,
    description,
    done: false,
  };
  tasks.push(task);
  return task;
}

function getAllTasks({ description }) {
  if (description) {
    const filteredTasks = tasks.filter((i) =>
      i.description.includes(description)
    );
    return filteredTasks;
  }
  return tasks;
}

// option => {}
function getTaskById(id) {
  const task = tasks.find((i) => i.id === id);
  return task;
}

function updateTaskById(id, { done, description }) {
  const task = getTaskById(id);
  if (done !== undefined) {
    // "123"  !"123" = false !!"123" = true
    task.done = !!done;
  }

  if (description) {
    task.description = '' + task.description;
  }
  return task;
}

function deleteTaskById(id) {
  const taskIndex = tasks.findIndex((i) => i.id === id);
  // const task = tasks[taskIndex]
  // const [task] = tasks.splice(taskIndex, 1);
  tasks.splice(taskIndex, 1);
  // return task;
}

module.exports = {
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  addTask,
};