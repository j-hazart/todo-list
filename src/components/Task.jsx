export default function Task({ taskInfo, onClick, onCompleted }) {


    return (
        <li className='list-element'>
            <span onClick={onCompleted} style={taskInfo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'initial' }}>{taskInfo.name}</span><button onClick={onClick}></button>
        </li >
    )
};