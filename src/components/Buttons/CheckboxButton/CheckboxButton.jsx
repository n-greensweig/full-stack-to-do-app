import { Checkbox } from "@mui/material";
import axios from 'axios';

function CheckboxButton(props) {

    // Helper function to toggle completed status
    const toggleCompleted = () => {

        // PUT request to change completed status
        axios.put(`/todo/${props.id}`)
            .then(response => {
                props.getTaskList();
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong');
            });

    };

    // Toggle completed on change
    return (
        <Checkbox checked={props.task.completed} value={props.task.completed} onChange={toggleCompleted} sx={{
            '&.Mui-checked': {
                color: 'navy'
            }
        }}
        />
    )
}

export default CheckboxButton;