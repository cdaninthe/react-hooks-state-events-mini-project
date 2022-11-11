import React from "react";
import Task from "./Task";

function TaskList({tasks, setTasks}) {

  function handleDeleteTask(deletedtask){
    console.log("delete task", deletedtask)
    const updatedTasks = tasks.filter(task => task !== deletedtask)
    setTasks(updatedTasks)
  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => (
        <Task key={task.text} name={task.text} category={task.category} 
          onDeleteClick={() => handleDeleteTask(task)}
        />
      ))}
    </div>
  );
}

export default TaskList;
