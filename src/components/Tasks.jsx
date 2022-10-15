const Task = ({ task, index, state }) => {
    //{(e) => e.target.parentNode.remove()}
    const [tasksList, setTasksList] = state;
    const removeTasks = () => {
    }
    return (
        <li key={index} className='task'>
            <p onClick={(e) => e.target.classList.toggle('checked')}> {task} </p>
            <span onClick={(e) => e.target.parentNode.remove()} > X </span>
        </li>
    )
};

export default Task;