import{addTask,getAllTasks,completeTask} from './task.js'
//add a task
addTask("eating","high",'2024-12-12')
addTask("sleeping","low",'2026-02-27')
//display all tasks
const tasks=getAllTasks()
console.log(tasks)
//complete a task
const complete=completeTask("eating")
console.log(complete)
//display all task again
const dis=getAllTasks()
console.log(dis)

