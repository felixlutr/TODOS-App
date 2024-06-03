import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
 

//clone project at home
//npm i
//npm run dev
//go to chrome open http://localhost:5173
//done button
//delete button
//sort by date\severity button
//edit button
//add some CSS





const App = () => {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState('');

  const generateTodo = () => {
    setTodos(prev => [...prev, { id: uuid(), name: input }]);
    setInput('');
  }

  const deleteTodo = (taskid) => {
    setTodos(prev => prev?.filter(todo => todo?.id !== taskid));
  }

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e?.target?.value)} />
      <button onClick={() => generateTodo()}>Create</button>
      <h1>TODO'S:</h1>
      <ul>
        {todos?.map((todo) => (
          <li key={`todo?key=${todo?.id}`}>
            <span>{todo?.name}</span>
            <button onClick={() => deleteTodo(todo?.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;