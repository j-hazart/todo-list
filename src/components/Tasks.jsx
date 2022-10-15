const Task = ({ task, index, state }) => {
    const [tasksList, setTasksList] = state;
    const firstLetterUpperCase = (taskToEdit) => {
        return taskToEdit.charAt(0).toUpperCase() + taskToEdit.slice(1).toLowerCase()
    }
    return (
        <li key={index} className='task'>
            <p onClick={(e) => e.target.classList.toggle('checked')}> {firstLetterUpperCase(task)} </p>
            <span onClick={(e) => e.target.parentNode.remove()} > X </span>
        </li>
    )
};

export default Task;