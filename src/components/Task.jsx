export default function Task({ taskInfo, onClick }) {

    const taskCheck = (event) => {
        event.target.style.textDecoration === ''
            ? event.target.style.textDecoration = 'line-through'
            : event.target.style.textDecoration = '';
    }
    return (
        <li className='list-element'>
            <span onClick={taskCheck}>{taskInfo.name}</span><button onClick={onClick}></button>
        </li>
    )
};