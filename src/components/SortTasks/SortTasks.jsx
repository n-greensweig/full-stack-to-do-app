import axios from "axios";
import { useState } from "react";
import ButtonComponent from "../Buttons/ButtonComponent/ButtonComponent";

import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from "@mui/material";
function SortTasks(props) {

    const [selectedOption, setSelectedOption] = useState('Completion status');

    // GET request that sorts by completed, dueDate, priority ASC/DESC
    // as user suggests via drop-down
    const handleSort = (event) => {


        event.preventDefault();
        props.setIsSorted(true);

        let sortParam = '';
        if (selectedOption === 'Task') {
            sortParam = 'task';
        } else if (selectedOption === 'Completion status (Incomplete to complete)') {
            sortParam = 'completed-ASC';
        } else if (selectedOption === 'Completion status (Complete to incomplete)') {
            sortParam = 'completed-DESC';
        } else if (selectedOption === 'Due date (Asc)') {
            sortParam = 'dueDate-ASC';
        } else if (selectedOption === 'Due date (Desc)') {
            sortParam = 'dueDate-DESC';
        } else if (selectedOption === 'Priority (Asc)') {
            sortParam = 'priorityOrder-ASC';
        } else if (selectedOption === 'Priority (Desc)') {
            sortParam = 'priorityOrder-DESC';
        }

        axios.get(`/todo/sortedResults?sort=${sortParam}`)
            .then(response => {
                console.log(response.data);
                props.setTaskList(response.data);
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong here.');
            });

    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (

        <form onSubmit={handleSort}>
            <FormControl>
                <InputLabel>Sort</InputLabel>
                <Select
                    value={selectedOption}
                    label="Sort"
                    onChange={handleSelectChange}
                >
                    <MenuItem value={'Completion status (Incomplete to complete)'}>Completion status (Incomplete to complete)</MenuItem>
                    <MenuItem value={'Completion status (Complete to incomplete)'}>Completion status (Complete to incomplete)</MenuItem>
                    <MenuItem value={'Due date (Asc)'}>Due date (Asc)</MenuItem>
                    <MenuItem value={'Due date (Desc)'}>Due date (Desc)</MenuItem>
                    <MenuItem value={'Priority (Asc)'}>Priority (Asc)</MenuItem>
                    <MenuItem value={'Priority (Desc)'}>Priority (Desc)</MenuItem>
                </Select>
                <ButtonComponent type={'submit'} function={handleSort} setTaskList={props.setTaskList} name={'Sort'} />
            </FormControl>
        </form>

    )

}

export default SortTasks;