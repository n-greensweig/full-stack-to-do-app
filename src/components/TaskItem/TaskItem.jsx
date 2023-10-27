import axios from "axios";
import swal from "sweetalert";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import makeStyles from "@mui/material";
import { Checkbox } from "@mui/material";

function TaskItem(props) {

    const deleteTask = () => {

        swal({
            title: 'Are you sure?',
            text: 'This will delete this item from the to-do list',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then(willDelete => {

            if (willDelete) {

                // DELETE request run when user confirms deletion of task
                axios.delete(`/todo/${props.id}`)
                    .then(response => {
                        props.getTaskList();
                    })
                    .catch(error => {
                        console.error(error);
                        alert('Something went wrong.');
                    })

            }

        });

    };



    const toggleCompleted = () => {

        axios.put(`/todo/${props.id}`)
            .then(response => {
                props.getTaskList();
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong');
            });

    };

    let formattedDate = `${new Date(props.task.dueDate).getMonth() + 1}/${new Date(props.task.dueDate).getDate()}/${new Date(props.task.dueDate).getFullYear()}`;

    // Returns a row for each task item
    return (



        <tr>
            <td><button onClick={toggleCompleted}>Completed</button></td>
            {/* <td><Checkbox onClick={toggleCompleted} /></td> */}
            <td>{props.task.task}</td>
            <td><DatePicker value={formattedDate} /></td>
            <td>{props.task.priority}</td>
            <td><button onClick={deleteTask}>Delete</button></td>
        </tr>
    )

}

export default TaskItem;