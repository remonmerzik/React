import React from "react";
import "./TodoItems.css";

const TodoItems = (props) => {
  const { items,deleteItem } = props;
let length=items.length



  const itemsList = length ? items.map((item) => {
    // or you can write length>0
    return (
      <div  key={item.id}>
        <span className="name">{item.name} </span>
        <span className="age">{item.age} </span>
        <span className="action icon" onClick={()=>deleteItem(item.id)}>&times;</span>
      </div>
    );
  }) :  <p>there is no item to show</p>






  

  return (
    <div className="listItems">
      <div>
        <span className="name title">NAME</span>
        <span className="age title">AGE</span>
        <span className="action title">ACTION</span>
      </div>
      {itemsList}
    </div>
  );
};

export default TodoItems;
