import { ButtonGroup } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import ButtonComponent from "../Buttons/ButtonComponent/ButtonComponent";
function SortTasks(props) {

    const [sortedResults, setSortedResults] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    // GET request that SORTS by completed, id, dueDate, priority and ASC, DESC
    // as user suggests via drop-down
    const handleSort = (event) => {

        event.preventDefault();

        let sortParam = '';

        if (selectedOption === 'Completion status') {
            sortParam = 'completed';
        } else if (selectedOption === 'Due date') {
            sortParam = 'dueDate';
        } else if (selectedOption === 'Priority') {
            sortParam = 'priority';
        }

        console.log(sortParam);

        axios.get(`/todo/sortedResults?sort=${sortParam}`)
            .then(response => {
                setSortedResults(response.data);
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong.');
            });

    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <>
            <form onSubmit={handleSort}>
                <h3>Sort</h3>
                <select onChange={handleSelectChange} value={selectedOption}>
                    <option value={'Completion status'}>Completion status</option>
                    <option value={'Due date'}>Due date </option>
                    <option value={'Priority'}>Priority</option>
                </select>
                <ButtonComponent type={'submit'} name={'Sort'} />
            </form>
        </>
    )

}

export default SortTasks;