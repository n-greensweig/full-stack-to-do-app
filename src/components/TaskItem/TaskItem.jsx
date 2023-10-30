import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import CheckboxButton from "../Buttons/CheckboxButton/CheckboxButton";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import axios from "axios";
import './TaskItem.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TaskItem(props) {

    let formattedDate = `${new Date(props.task.dueDate).getMonth() + 1}/${new Date(props.task.dueDate).getDate()}/${new Date(props.task.dueDate).getFullYear()}`;

    const [task, setTask] = useState('');

    const saveEditedTask = (e) => {

        // Set task as the user's new input on 
        setTask(e.target.value);

        // POST request to update the task in PostgreSQL
        axios.post(`/todo/${props.id}`, {
            task: task,
        }).then(response => {
            props.getTaskList();
        }).catch(error => {
            console.error(error);
            alert('Something went wrong.');
        });

    };

    // POST request to change the dates upon user change/blur
    const notify = () => toast('Wow so mcuhness!');
    
    // Returns a row for each task item
    return (

        <tr>
            <td><CheckboxButton id={props.id} getTaskList={props.getTaskList} task={props.task} /></td>
            <td
                className="underline"
                contentEditable={true}
                suppressContentEditableWarning={true}
                value={task}
                onInput={e => setTask(e.currentTarget.textContent)}
                onBlur={saveEditedTask}
                onMouseOverCapture={notify} >

                {props.task.task}

            </td>
            <td>{<DatePicker value={formattedDate} />}</td>
            <td>{props.task.priority}</td>
            <td><DeleteButton id={props.id} getTaskList={props.getTaskList} /></td>
        </tr>

    )

}

export default TaskItem;