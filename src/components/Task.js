import React from "react";

function Task({name, category, onDeleteClick}) {


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{name}</div>
      <button className="delete" onClick={onDeleteClick}>X</button>
    </div>
  );
}

export default Task;
