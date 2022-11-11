import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {

  const categoryButtons = categories.map(category => {
    const className = category === selectedCategory ? "selected" : ""
    return (
      <button key={category} className={className} 
        onClick={() => setSelectedCategory(category)}>
        {category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
