import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';
import './Form.css';
import ButtonComponent from '../Buttons/ButtonComponent/ButtonComponent';

function Form(props) {

    // Variables for each user input field
    const [task, setTask] = useState('');
    const [dueDate, setDueDate] = useState(null);
    const [priority, setPriority] = useState('');

    // POST request to run on form submission
    const sendTaskToServer = event => {

        event.preventDefault();

        axios.post('/todo', {
            task: task,
            dueDate: dueDate,
            priority: priority,
        })
            .then(response => {
                props.getTaskList();
                setTask('');
                setDueDate('');
                setPriority('');
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong.');
            });

    };

    // Set due date value to user-selected date from drop-down calendar
    const handleDateChange = (date) => {
        setDueDate(date);
    };


    return (

        <LocalizationProvider dateAdapter={AdapterDayjs}>


            {/* User input form */}
                <form id='user-input' onSubmit={sendTaskToServer}>

                    {/* First input field */}
                    <input id='task-input' value={task} className='margin form-input' placeholder="Task" onChange={e => setTask(e.target.value)} required />

                    {/* Second input field */}
                    <DatePicker
                        className={'datepicker margin form-input'}
                        value={dueDate}
                        selected={dueDate}
                        onChange={handleDateChange}
                        dateFormat={'MM/dd/yyyy'}
                        isClearable={true}
                        placeholderText='Due Date'
                    />

                    {/* Priority drop-down */}
                    <select id='priority-input' value={priority} className='margin' onChange={e => setPriority(e.target.value)}>
                        <option className="gray">Priority</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>

                    {/* Submit button */}
                    <ButtonComponent type={'Submit'} name={'Save'} />
                    {/* <button type='submit'>Save</button> */}
                </form>

        </LocalizationProvider>

    );
}

export default Form;