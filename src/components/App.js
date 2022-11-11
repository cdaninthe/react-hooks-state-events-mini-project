import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function onTaskFormSubmit(newTask){
    setTasks([...tasks, newTask])
  }

  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} 
        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={categories}/>
      <TaskList tasks={tasksToDisplay} setTasks={setTasks}/>
    </div>
  );
}

export default App;
