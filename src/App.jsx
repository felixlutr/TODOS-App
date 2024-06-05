import React, { useState, useRef } from "react";
import uuid from "react-uuid";
import "./styles.css";
import Todo from "./Components/Todo";

// [*]go to chrome open http://localhost:5173
// [*]get example from https://codesandbox.io/p/sandbox/z567lm8wp?file=%2Fsrc%2Fstyles.css%3A74%2C14
//[]install react icons at home from https://react-icons.github.io/react-icons/

// [x]delete button
// []done checkbox
// []edit button
// []sort by date\severity\done or not
// []prevent from adding empty task
// []take care of states in css of taskCheckBoxUncomplete\taskCheckBoxComplete
// []long text task is moving boxes
// []add some CSS

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const todoInputRef = useRef();
  

  console.log({ todos });

  const generateTodo = () => {
    if (input?.length < 1) {
      alert("Please provide a valid todo.");
      todoInputRef.current.focus();
      return;
    }
    setTodos((prev) => [
      ...prev,
      { id: uuid(), name: input, isChecked: false },
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
    setTodos(prev => prev.map(todo => {
      if(todo.id === taskId) {
        return {
          ...todo,
          name: inputValue
        }
      }

      return todo;
    }))
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
          <fieldset className="fieldTestBox">
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
          </fieldset>
        </ol>
      </div>
    </div>
  );
};

export default App;
