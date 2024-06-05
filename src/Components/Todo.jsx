import React, { useState } from "react";
import { FaCheck, FaPencil, FaTrash } from "react-icons/fa6";

const Todo = ({
  id,
  isChecked,
  name,
  toggleTodoCheckedStatus,
  deleteTodo,
  editTodo,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  const onSave = () => {
    editTodo(id, inputValue);
    setIsEditMode(false);
  };

  return (
    <div className="content" key={`todo?key=${id}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => toggleTodoCheckedStatus(id)}
        className={"todo-checkbox"}
        readOnly // this checkbox does nothing, the parrent control the checked state.
      />
      {isEditMode ? (
        <textarea
          className="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSave();
            }
          }}
        />
      ) : (
        <span>{name}</span>
      )}
      {isEditMode ? (
        <FaCheck
          onClick={() => {
            onSave();
          }}
        />
      ) : (
        <FaPencil
          fontSize={20}
          color="black"
          className="buttonEdit"
          onClick={(e) => {
            e.stopPropagation();
            setIsEditMode(true);
          }}
        />
      )}

      <FaTrash
        fontSize={20}
        color="red"
        className="buttonDelete"
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
};

export default Todo;
