import React, { useState, useRef } from "react";
import uuid from "react-uuid";
import "./styles.css";
import Todo from "./Components/Todo";

// [*] http://localhost:5173

// [x]delete button
// [x]done checkbox
// [x]edit button
// []sort by date
// [x]prevent from adding empty task
// [x]take care of states in css of taskCheckBoxUncomplete\taskCheckBoxComplete
// []long text task is moving boxes
// [x]add some CSS

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const todoInputRef = useRef();

  const currentDate = new Date();
  console.log(currentDate.toLocaleDateString());

  const generateTodo = () => {
    if (input?.length < 1) {
      alert("Please provide a valid todo.");
      todoInputRef.current.focus();
      return;
    }
    setTodos((prev) => [
      ...prev,
      { id: uuid(), name: input, isChecked: false , currentDate},
    ]);
    setInput("");
  };

  const deleteTodo = (taskid) => {
    setTodos((prev) => prev?.filter((todo) => todo?.id !== taskid));
  };

  const toggleTodoCheckedStatus = (taskId) => {
    setTodos((prev) =>
      prev?.map((todo) => {
        if (todo.id === taskId) {
          return {
            ...todo,
            isChecked: !todo.isChecked,
          };
        }
        return todo;
      })
    );
  };

  const editTodo = (taskId, inputValue) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === taskId) {
          return {
            ...todo,
            name: inputValue,
          };
        }

        return todo;
      })
    );
    // setTodos((prev) => [...prev, { id: uuid(), name: input }]);
  };

  return (
      <div className="mainBoxBody">
        <div>
          <h1 className="mainBoxTopic">TODO'S:</h1>
          <input
            className="inputTaskBox"
            value={input}
            ref={todoInputRef}
            onChange={(e) => setInput(e?.target?.value)}
            placeholder="Add New Task"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                generateTodo();
              }
            }}
          />
          <button className="inputTaskButton" onClick={() => generateTodo()}>
            Add Task
          </button>
          <ol>
            <div className="contentBox">
              {todos?.map((todo) => (
                <Todo
                  key={`todo?key=${todo?.id}`}
                  id={todo.id}
                  name={todo.name}
                  isChecked={todo.isChecked}
                  {...{
                    deleteTodo,
                    editTodo,
                    toggleTodoCheckedStatus,
                  }}
                />
              ))}
            </div>
          </ol>
        </div>
      </div>
  );
};

export default App;
