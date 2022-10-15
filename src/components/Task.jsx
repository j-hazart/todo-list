export default function Task({ taskInfo, onClick }) {
    return (
        <li className='list-element'>
            {taskInfo.name} <button onClick={onClick}>X</button>
        </li>
    )
};