import React from "react";
import "./listStyle.css";
import Task from "./Tasks";

const FormAndList = () => {
    const [userInput, setUserInput] = React.useState('');
    const [tasksList, setTasksList] = React.useState([
        "element 1",
        "element 2",
        "element 3",
    ]);

    const handleTasksList = (event) => {
        event.preventDefault();
        userInput === '' || setTasksList([...tasksList, userInput,]);
        setUserInput('');
    };

    return (
        <div>
            <form>
                <input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)}></input>
                <button type="submit" onClick={handleTasksList}>Ajouter</button>
            </form>
            <ul>
                {tasksList.map((task, index) => <Task task={task} index={index} state={[tasksList, setTasksList]} />)}
            </ul>
        </div>
    );
};

export default FormAndList;