import React from 'react';

const Categories = ({ filterItem, categories }) => {
  return (
    <div className="menu-category">
      {
        categories.map((category, index) => {
          return <button className="button" type="button" onClick={() => filterItem(category)} key={index}>{category}</button>
        })
      }
    </div>
  )
}

export default Categories;
