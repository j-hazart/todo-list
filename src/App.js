import { useState } from 'react';
import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([...JSON.parse(localStorage.getItem('tasks'))]);

  const handleDelete = (id) => {
    const tasksCopy = [...tasks];
    const tasksCopyUpdated = tasksCopy.filter((task) => task.id !== id);
    setTasks(tasksCopyUpdated);
    localStorage.setItem('tasks', JSON.stringify(tasksCopyUpdated))
  };

  const handleCompleted = (id) => {
    const tasksCopy = [...tasks];
    tasksCopy.forEach((task) => task.id === id ? task.completed = !task.completed : null);
    setTasks(tasksCopy);
    localStorage.setItem('tasks', JSON.stringify(tasksCopy))
  };

  const handleAdd = (taskToAdd) => {
    //1. copy of state
    const tasksCopy = [...tasks];

    //2. handle copy of state
    tasksCopy.push(taskToAdd);
    localStorage.setItem('tasks', JSON.stringify(tasksCopy))

    //3.edit state with set function
    setTasks(tasksCopy);
  };

  return (
    <div className='main'>
      <h1>To Do List</h1>
      <TaskForm handleAdd={handleAdd} />
      <ul className='list'>
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              taskInfo={task}
              onClick={() => handleDelete(task.id)}
              onCompleted={() => handleCompleted(task.id)}
            />)
        }
      </ul>
    </div >
  )
}

export default App;
