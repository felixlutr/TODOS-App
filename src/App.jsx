import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import './styles.css'
 

// []clone project at home
// []npm i
// []npm run dev
// []go to chrome open http://localhost:5173

// []done checkbox
// [x]delete button
// []sort by date\severity\done or not
// []edit button
// []prevent from adding empty task
// []add some CSS



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

  const  doneTodo = (taskid) => {
    setTodos(prev => [...prev, taskid])
  }

  const  editTodo = (taskid) => {
    setTodos(prev => [...prev, {id: uuid(), name: input}])
  }
  
  
  
  
  
  
  return (
  <div className="mainBoxBody">  
    <div>
      <h1 className="mainBoxTopic">TODO'S:</h1>
      <input className="inputTaskBox" value={input} onChange={(e) => setInput(e?.target?.value)} placeholder="Add New Task"/>
      <button className="inputTaskButton" onClick={() => generateTodo()}>Add Task</button>
      <ol>
        {todos?.map((todo) => (
          <div key={`todo?key=${todo?.id}`}>
            <input type="checkbox" onChange={event => this.props.handleChecked(event, index)} checked={todo.done} label="Done"/>
            <span>{todo?.name}</span>
            <button onClick={() => editTodo(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo?.id)}>Delete</button>
          </div>
        ))}
      </ol>
    </div>
  </div>
  );
}


export default App;