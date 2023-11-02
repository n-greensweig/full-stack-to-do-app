import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import CheckboxButton from "../Buttons/CheckboxButton/CheckboxButton";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import axios from "axios";
import './TaskItem.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function TaskItem(props) {

    let formattedDate = `${new Date(props.task.dueDate).getMonth() + 1}/${new Date(props.task.dueDate).getDate()}/${new Date(props.task.dueDate).getFullYear()}`;

    const [task, setTask] = useState(props.task.task);
    const [editedDueDate, setEditedDueDate] = useState(new Date(formattedDate));
    const [editedPriority, setEditedPriority] = useState(props.task.priority);

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


    // POST request to change the dates onchange/onblur
    const saveEditedDueDate = (date) => {

        // POST request to update the due date in PostgreSQL
        axios.post(`/todo/update-due-date/${props.id}`, {
            dueDate: date,
        }).then(response => {
            props.getTaskList();
        }).catch(error => {
            console.error(error);
            alert('Something went wrong.');
        });

    };

    const handleDateChange = (date) => {
        saveEditedDueDate(date);
        setEditedDueDate(date);
    };
    
    // POST request to change the dates onchange/onblur
    const saveEditedPriority = (priority) => {

        // POST request to update the due date in PostgreSQL
        axios.post(`/todo/update-priority/${props.id}`, {
            priority: priority,
        }).then(response => {
            props.getTaskList();
        }).catch(error => {
            console.error(error);
            alert('Something went wrong.');
        });

    };

    const handlePriorityChange = (e) => {
        saveEditedPriority(e.target.value);
        setEditedPriority(e.target.value);
    };

    // Returns a row for each task item
    return (

        <tr>
            <td><CheckboxButton id={props.id} getTaskList={props.getTaskList} task={props.task} /></td>
            {/* 500 error when double clicking into task item */}

            <td
                className={props.task.completed ? 'underline dullen' : 'underline strong'}
                contentEditable={true}
                suppressContentEditableWarning={true}
                value={task}
                onInput={e => setTask(e.currentTarget.textContent)}
                onBlur={saveEditedTask}
            >
                {props.task.task}
            </td>

            <td>{
                formattedDate === '12/31/1969' ? <DatePicker
                    onChange={handleDateChange}
                    dateFormat='MM/dd/yyyy'
                    isClearable={true}
                /> : <DatePicker
                    selected={new Date(formattedDate)}
                    onChange={handleDateChange}
                    dateFormat='MM/dd/yyyy'
                    isClearable={true}
                />}
            </td>
            <td
                className={props.task.completed ? 'dullen' : 'strong' && props.task.priority === 'High' ? 'high' : (props.task.priority === 'Medium' ? 'medium' : (props.task.priority === 'Low' ? 'low' : 'none'))}
            >
                <Select
                    className='margin'
                    labelId="dropdown-label"
                    id="dropdown"
                    defaultValue={props.task.priority === null ? '' : props.task.priority}
                    label="Priority"
                    onChange={handlePriorityChange}
                    sx={{ width: '100%' }}
                >
                    <MenuItem value={'None'}><em>None</em></MenuItem>
                    <MenuItem value={'Low'}>Low</MenuItem>
                    <MenuItem value={'Medium'}>Medium</MenuItem>
                    <MenuItem value={'High'}>High</MenuItem>
                </Select>
            </td>
            <td><DeleteButton id={props.id} getTaskList={props.getTaskList} /></td>
        </tr>

    )

}

export default TaskItem;