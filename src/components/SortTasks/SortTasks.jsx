import axios from "axios";
import { useState } from "react";
import ButtonComponent from "../Buttons/ButtonComponent/ButtonComponent";

import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from "@mui/material";
function SortTasks(props) {

    const [selectedOption, setSelectedOption] = useState('Completion status');

    /* Here's what we need from the sort:
    - Sort by ASC or DESC
    - Adjust sort by priority to go in order of Null -> Low -> Medium -> High
    - Keep sorted results past page refresh?
    */


    // GET request that sorts by completed, dueDate, priority ASC, DESC
    // as user suggests via drop-down
    const handleSort = (event) => {


        event.preventDefault();
        props.setIsSorted(true);

        let sortParam = '';
        if (selectedOption === 'Task') {
            sortParam = 'task';
        } else if (selectedOption === 'Completion status') {
            sortParam = 'completed';
        } else if (selectedOption === 'Due date') {
            sortParam = 'dueDate';
        } else if (selectedOption === 'Priority') {
            sortParam = 'priority';
        }

        axios.get(`/todo/sortedResults?sort=${sortParam}`)
            .then(response => {
                props.setSortedResults(response.data);
                props.setTaskList(response.data);
            })
            .catch(error => {
                console.log('hey', sortParam);
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
                    <MenuItem value={'Completion status'}>Completion status</MenuItem>
                    <MenuItem value={'Due date'}>Due date</MenuItem>
                    <MenuItem value={'Priority'}>Priority</MenuItem>
                </Select>
                <ButtonComponent type={'submit'} function={handleSort} setTaskList={props.setTaskList} name={'Sort'} />
            </FormControl>
        </form>

    )

}

export default SortTasks;