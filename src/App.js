import { useState } from 'react';
import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';


function App() {

  const [tasks, setTasks] = useState([]);

  const handleDelete = (id) => {
    const tasksCopy = [...tasks];
    const tasksCopyUpdated = tasksCopy.filter((task) => task.id !== id);
    setTasks(tasksCopyUpdated);
  };

  const handleAdd = (taskToAdd) => {
    //1. copy of state
    const tasksCopy = [...tasks];

    //2. handle copy of state
    tasksCopy.push(taskToAdd);

    //3.edit state with set function
    setTasks(tasksCopy);
  };

  return (
    <div className='main'>
      <h1>To Do List</h1>
      <TaskForm className='task-form' handleAdd={handleAdd} />
      <ul className='list'>
        {tasks.map((task) => <Task className='list-element' key={task.id} taskInfo={task} onClick={() => handleDelete(task.id)} />)}
      </ul>
    </div >
  )
}

export default App;
