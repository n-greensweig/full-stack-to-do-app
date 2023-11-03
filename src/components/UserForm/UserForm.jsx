import React, { useState } from 'react';
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css';
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
import { Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

function UserForm(props) {

    // Variables for each user input field
    const [task, setTask] = useState('');
    const [dueDate, setDueDate] = useState(null);
    const [priority, setPriority] = useState(null);

    // Reset the form upon submission
    const [formKey, setFormKey] = useState(0);

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

                console.log(priority);
                // Reset values
                setTask('');
                setDueDate(null);
                setPriority(null);

                setFormKey(prevKey => prevKey + 1);
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
            <form key={formKey} id='user-input' onSubmit={sendTaskToServer}>

                {/* <Box sx={{ minWidth: 120 }}> */}
                <div className='flex'>
                    <FormControl variant='outlined' fullWidth sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1000, marginRight: '2rem' }}>

                        {/* First input field */}
                        <TextField
                            id='task-input'
                            className='margin'
                            label='Task'
                            variant='outlined'
                            onChange={e => setTask(e.target.value)} required />

                    </FormControl>

                    <FormControl variant='outlined' fullWidth>

                            {/* Second input field */}
                            <DatePicker
                                label='Due date'
                                className={'datepicker margin form-input'}
                                value={dueDate}
                                selected={dueDate}
                                onChange={handleDateChange}
                                dateFormat={'MM/dd/yyyy'}
                                 />

                        </FormControl>

                    <FormControl variant='outlined' fullWidth sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px', marginRight: '2rem' }}>

                        {/* Priority drop-down */}
                        <InputLabel id='dropdown-label'>Priority</InputLabel>
                        <Select
                            className='margin'
                            labelId="dropdown-label"
                            id="dropdown"
                            defaultValue={'None'}
                            value={props.priority}
                            label="Priority"
                            onChange={e => setPriority(e.target.value)}
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value={'None'}><em>None</em></MenuItem>
                            <MenuItem value={'Low'}>Low</MenuItem>
                            <MenuItem value={'Medium'}>Medium</MenuItem>
                            <MenuItem value={'High'}>High</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Submit button */}
                    <ButtonComponent function={sendTaskToServer} type={'submit'} name={'Save'} />
                </div>
                {/* </Box> */}
            </form>


        </LocalizationProvider>



    );
}

export default UserForm;