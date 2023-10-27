import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';
import './Form.css';

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

    const handleDateChange = (date) => {
        setDueDate(date);
    };


    return (

        <LocalizationProvider dateAdapter={AdapterDayjs}>


            {/* User input form */}
            <div id="form">
                <form onSubmit={sendTaskToServer}>
                    <span>Add a to-do</span><br></br><br></br>

                    {/* First input field */}
                    <label htmlFor='task-input'>Task: </label>
                    <input id='task-input' value={task} className='margin' placeholder="Buy milk..." onChange={e => setTask(e.target.value)} required />

                    {/* Second input field */}
                    <label htmlFor='due-input'>Due Date: </label>
                    {/* <input id='due-input' type='date' value={dueDate} className='margin' placeholder="2023-10-20" onChange={e => setDueDate(e.target.value)} /> */}
                    <DatePicker
                        className={'datepicker'}
                        selected={dueDate}
                        onChange={handleDateChange}
                        dateFormat={'MM/dd/yyyy'}
                        isClearable
                        placeholderText='MM/DD/YYYY'
                    />

                    {/* Priority drop-down */}
                    <label htmlFor='priority-input'>Priority: </label>
                    <select id='priority-input' value={priority} className='margin' onChange={e => setPriority(e.target.value)}>
                        <option className="gray">Select an option....</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>

                    {/* Submit button */}
                    <button type='submit'>Save</button>
                </form>
            </div>

        </LocalizationProvider>

    );
}

export default Form;