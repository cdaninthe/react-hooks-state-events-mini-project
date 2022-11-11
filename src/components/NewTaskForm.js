import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskName, setTaskName] = useState("");
  const [taskCategory, setCategory] = useState("Code");

  function handleCategoryChange(event){
    setCategory(event.target.value)
  }

  function handleNameChange(event){
    setTaskName(event.target.value)
  }

  function handleFormSubmit(event){
    event.preventDefault()
    const newTask = {
      text: taskName,
      category: taskCategory
    }
    onTaskFormSubmit(newTask)
  }

  const categoriesToDisplay = categories.map((category) => {
    if (category !== "All")
    {return (
      <option key={category} value={category}>
        {category}
      </option>
    )}})

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNameChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {categoriesToDisplay}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
