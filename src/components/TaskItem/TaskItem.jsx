import axios from "axios";
import swal from "sweetalert";
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



    // Returns a row for each task item
    return (
        <tr>
            <td><button onClick={toggleCompleted}>Completed</button></td>
            <td>{props.task.task}</td>
            <td>{props.task.dueDate}</td>
            <td>{props.task.priority}</td>
            <td><button onClick={deleteTask}>Delete</button></td>
        </tr>
    )

}

export default TaskItem;