import React, { useState } from 'react';
import data from "./data.json";

// Components
import Header from './Header';
//import TodoList from './ToDoList'
import ContentForm from './Content';

// CSS styles
import './App.css';



function App() {
  const [ toDoList, setToDoList] = useState(data);

  const handleToggle = (id) =>{
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? {...task, complete: !task.complete} : {...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task =>{
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const handleRemoval = (id) => {
    let removed = toDoList.filter(task => {
      return task.id != id;
    });
    setToDoList(removed);
  }

  return (
    <div className="App">
      <Header/>
      <ContentForm toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} handleRemoval={handleRemoval}/>
      
    </div>
    //<TodoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
  );
}

export default App;
