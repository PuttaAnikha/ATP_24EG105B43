import { validateTitle,validatePriority,validateDueDate} from "./validator.js";

const tasks=[];
// 1. Add new task
                    function addTask(title, priority, date)
                     {
                      if(!validateTitle(title)&&!validatePriority(priority)&&!validateDueDate(date))// Validate using imported functions
                      {
                        console.log("invalid task")
                      }
                        // If valid, add to tasks array
                      

                      tasks.push({title,priority,date})
                      // Return success/error message
                      console.log("task added")
                      
                      
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                      return tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(title) {
                      // Find task and mark as complete
                      const task=tasks.find(t=>t.title===title)
                      if(!task){
                        console.log("task not found")
                        return;
                      }
                      task.completed=true;
                      console.log("task completed")
                      
                    }

                  // Export functions
                  export{addTask,getAllTasks,completeTask}
