import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';
import './UserForm.css';
import ButtonComponent from '../Buttons/ButtonComponent/ButtonComponent';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

function UserForm(props) {

    // Variables for each user input field
    const [task, setTask] = useState('');
    const [dueDate, setDueDate] = useState(null);
    const [priority, setPriority] = useState(null);

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

                // Reset values
                setTask('');
                setDueDate(null);
                setPriority(null);
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
                <FormControl>

                    {/* First input field */}
                    <TextField id='task-input' className='margin' label='Task' variant='outlined' onChange={e => setTask(e.target.value)} required />

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
                    {/* <InputLabel id="demo-simple-select-label">Priority</InputLabel> */}
                    <Select className='margin'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={priority}
                        label="Priority"
                        onChange={e => setPriority(e.target.value)}
                    >
                        <MenuItem value={'Low'}>Low</MenuItem>
                        <MenuItem value={'Medium'}>Medium</MenuItem>
                        <MenuItem value={'High'}>High</MenuItem>
                    </Select>
                    {/* <select id='priority-input' value={priority} className='margin' onChange={e => setPriority(e.target.value)}>
                        <option className="gray">Priority</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select> */}

                    {/* Submit button */}
                    <ButtonComponent function={sendTaskToServer} type={'submit'} name={'Save'} />

                </FormControl>



            </form>

        </LocalizationProvider>



    );
}

export default UserForm;