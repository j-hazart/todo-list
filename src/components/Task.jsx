export default function Task({ taskInfo, onClick }) {
    return (
        <li>
            {taskInfo.name} <button onClick={onClick}>X</button>
        </li>
    )
};