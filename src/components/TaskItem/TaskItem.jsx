import { useState } from "react";
import CheckboxButton from "../Buttons/CheckboxButton/CheckboxButton";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import axios from "axios";
import './TaskItem.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";
import { Card, CardActions, CardContent, Grid, Paper, Typography } from "@mui/material";

function TaskItem(props) {

    let formattedDate = `${new Date(props.task.dueDate).getMonth() + 1}/${new Date(props.task.dueDate).getDate()}/${new Date(props.task.dueDate).getFullYear()}`;
    let newFormattedDate = `${new Date(props.task.dueDate).getFullYear()}-${new Date(props.task.dueDate).getMonth() + 1}-${new Date(props.task.dueDate).getDate()}`;

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

        // <LocalizationProvider dateAdapter={AdapterDayjs}>
        //     <tr>
        //         <td><CheckboxButton id={props.id} getTaskList={props.getTaskList} task={props.task} /></td>
        //         {/* 500 error when double clicking into task item */}

        //         <td
        //             className={props.task.completed ? 'underline dullen' : 'underline strong'}
        //             contentEditable={true}
        //             suppressContentEditableWarning={true}
        //             value={task}
        //             onInput={e => setTask(e.currentTarget.textContent)}
        //             onBlur={saveEditedTask}
        //         >
        //             {props.task.task}
        //         </td>

        //         <td>
        //             {
        //                 formattedDate === '12/31/1969' ? <DatePicker
        //                     defaultValue={null}
        //                     onChange={handleDateChange}
        //                     dateFormat='MM/dd/yyyy'
        //                     isClearable={true}
        //                 /> : <DatePicker
        //                     defaultValue={dayjs(newFormattedDate)}
        //                     views={['year', 'month', 'day']}
        //                     onChange={handleDateChange}
        //                     dateFormat='MM/dd/yyyy'
        //                     isClearable={true}
        //                 />}
        //         </td>
        //         <td
        //             className={props.task.completed ? 'dullen' : 'strong' && props.task.priority === 'High' ? 'high' : (props.task.priority === 'Medium' ? 'medium' : (props.task.priority === 'Low' ? 'low' : 'none'))}
        //         >
        //             <Select
        //                 className='margin'
        //                 labelId="dropdown-label"
        //                 id="dropdown"
        //                 defaultValue={props.task.priority === null ? '' : props.task.priority}
        //                 label="Priority"
        //                 onChange={handlePriorityChange}
        //                 sx={{ width: '100%',

        //                 backgroundColor: props.task.completed ? 'white' :
        //                 props.task.priority === null ||
        //                 props.task.priority === 'None' ? 'white' :
        //                 props.task.priority === 'Low' ? 'lightgray' :
        //                 props.task.priority === 'Medium' ? 'orange' : 'red',

        //                 color: props.task.completed ? 'lightgray' : 'white'

        //             }}
        //             >
        //             <MenuItem value={'None'}><em>None</em></MenuItem>
        //             <MenuItem value={'Low'}>Low</MenuItem>
        //             <MenuItem value={'Medium'}>Medium</MenuItem>
        //             <MenuItem value={'High'}>High</MenuItem>
        //         </Select>
        //     </td>
        //     <td>
        //         <DeleteButton id={props.id} getTaskList={props.getTaskList} />
        //     </td>
        // </tr>
        // </LocalizationProvider >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid item spacing={3}>
                <Paper elevation={5}>
                    <div style={{ width: '800px' }}>
                        <Card>
                            <CardContent sx={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ marginRight: '20px' }}>
                                    <CheckboxButton id={props.id} getTaskList={props.getTaskList} task={props.task} />
                                </div>
                                <div style={{ marginRight: '50px', width: '250px' }}>
                                    <Typography
                                        className={props.task.completed ? 'underline dullen' : 'underline strong'}
                                        contentEditable={true}
                                        suppressContentEditableWarning={true}
                                        value={task}
                                        onInput={e => setTask(e.currentTarget.textContent)}
                                        onBlur={saveEditedTask}
                                    >{props.task.task}</Typography>
                                </div>

                                <div style={{ marginRight: '50px' }}>
                                    {
                                        formattedDate === '12/31/1969' ? <DatePicker
                                            defaultValue={null}
                                            onChange={handleDateChange}
                                            dateFormat='MM/dd/yyyy'
                                            isClearable={true}
                                        /> : <DatePicker
                                            defaultValue={dayjs(newFormattedDate)}
                                            views={['year', 'month', 'day']}
                                            onChange={handleDateChange}
                                            dateFormat='MM/dd/yyyy'
                                            isClearable={true}
                                        />
                                    }
                                </div>

                                <Select
                                    className='margin'
                                    labelId="dropdown-label"
                                    id="dropdown"
                                    defaultValue={props.task.priority === null ? '' : props.task.priority}
                                    label="Priority"
                                    onChange={handlePriorityChange}
                                    sx={{
                                        width: '20%',

                                        backgroundColor: props.task.completed ? 'white' :
                                            props.task.priority === null ||
                                                props.task.priority === 'None' ? 'white' :
                                                props.task.priority === 'Low' ? 'lightgray' :
                                                    props.task.priority === 'Medium' ? 'orange' : 'red',

                                        color: props.task.priority === null ||
                                            props.task.priority === 'None' ? 'white' :
                                            props.task.completed ? 'lightgray' : 'white'

                                    }}
                                >
                                    <MenuItem value={'None'}><em>None</em></MenuItem>
                                    <MenuItem value={'Low'}>Low</MenuItem>
                                    <MenuItem value={'Medium'}>Medium</MenuItem>
                                    <MenuItem value={'High'}>High</MenuItem>
                                </Select>
                                <CardActions><DeleteButton id={props.id} getTaskList={props.getTaskList} /></CardActions>
                            </CardContent>
                        </Card>
                    </div>
                </Paper>
            </Grid>

        </LocalizationProvider >

    )

}

export default TaskItem;