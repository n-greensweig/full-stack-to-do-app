import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import CheckboxButton from "../Buttons/CheckboxButton/CheckboxButton";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import { useState } from "react";
import axios from "axios";
import './TaskItem.css';

function TaskItem(props) {

    let formattedDate = `${new Date(props.task.dueDate).getMonth() + 1}/${new Date(props.task.dueDate).getDate()}/${new Date(props.task.dueDate).getFullYear()}`;
    
    // Come back here
    const [task, setTask] = useState('');


    const editTask = () => {

        // POST request to update
        axios.post(`/todo/${props.id}`, {
            id: props.id,

        }).then(response => {
            props.getTaskList();
        }).catch(error => {
            console.error(error);
            alert('Something went wrong.');
        });

    };

    // Returns a row for each task item
    return (

        <tr>
            <td><CheckboxButton id={props.id} getTaskList={props.getTaskList} task={props.task} /></td>
            <td contentEditable={true} onInput={e => editTask(props.id, e.currentTarget.textContent)} >{props.task.task}</td>
            <td><DatePicker value={formattedDate} /></td>
            <td>{props.task.priority}</td>
            <td><DeleteButton id={props.id} getTaskList={props.getTaskList} /></td>
        </tr>

    )

}

export default TaskItem;