import { Checkbox } from "@mui/material";
import { useState } from "react";
import axios from 'axios';

function CheckboxButton(props) {

    // Initialize checked state of each checkbox on DOM as 'completed' value in DB
    const [isSelected, setIsSelected] = useState(props.task.completed);

    // Helper function to toggle completed status
    const toggleCompleted = () => {

        setIsSelected(!isSelected);

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
        <Checkbox checked={isSelected} value={isSelected} onChange={toggleCompleted} />
    )
}

export default CheckboxButton;