import React, { useState } from 'react';
import data from "./data.json";
import { format } from 'date-fns';

// Components
import Header from './Header';
import ContentForm from './Content';


// CSS styles
import './App.css';
import { CssBaseline } from '@mui/material';



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

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, {id:toDoList.length + 1, date: Date.parse(format(Date.now(), 'dd/MM/yyyy')), task: userInput, complete: false}];
    setToDoList(copy);
  }

  return (
    <React.Fragment>
      <CssBaseline/>
      <div className="App">
        <Header/>
        <ContentForm toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} handleRemoval={handleRemoval} addTask={addTask}/>
      </div>
    </React.Fragment>
  );
}

export default App;
