import { useState } from "react";

export default function TaskForm({ handleAdd }) {
    const [newTask, setNewTask] = useState('');

    const handleChange = (event) => {
        setNewTask(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const id = new Date().getTime();
        const name = newTask;
        const taskToAdd = { id, name, completed: false };
        name === '' || handleAdd(taskToAdd);

        setNewTask('');
    };

    return (
        <form className='task-form' action="submit" onSubmit={handleSubmit}>
            <input type='text' placeholder='Ajoute une tâche...' value={newTask} onChange={handleChange}></input>
            <button type="submit">+</button>
        </form>
    )
};