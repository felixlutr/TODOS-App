import React from "react";
import './styles.css'

const Content= () => {
return (
<div className="content" key={`todo?key=${todo?.id}`}>
  <input
    type="checkbox"
    checked={todo.isChecked}
    onChange={() => toggleTodoCheckedStatus(todo.id)}
    className={"todo-checkbox"}
    readOnly // this checkbox does nothing, the parrent control the checked state.
  />
  <span>{todo?.name}</span>
  <FaPencil
    fontSize={20}
    color="black"
    className="buttonEdit"
    onClick={(e) => {
      e.stopPropagation();
      editTodo(todo.id);
    }}
  />
  <FaTrash
    fontSize={20}
    color="red"
    className="buttonDelete"
    onClick={() => deleteTodo(todo?.id)}
  />
</div>
)}


export default Content 
