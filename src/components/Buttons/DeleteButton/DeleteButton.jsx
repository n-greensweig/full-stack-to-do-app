import swal from "sweetalert";
import axios from "axios";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function DeleteButton(props) {

    // Delete task when user clicks on delete button
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

    return (
        // <ButtonComponent onClick={deleteTask} type={'button'} name={'Delete'} />
        <button onClick={deleteTask}>Delete</button>
    )

}

export default DeleteButton;