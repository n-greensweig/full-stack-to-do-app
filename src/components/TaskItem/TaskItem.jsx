import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import CheckboxButton from "../Buttons/CheckboxButton/CheckboxButton";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";

function TaskItem(props) {

    let formattedDate = `${new Date(props.task.dueDate).getMonth() + 1}/${new Date(props.task.dueDate).getDate()}/${new Date(props.task.dueDate).getFullYear()}`;

    // Returns a row for each task item
    return (

        <tr>
            <td><CheckboxButton id={props.id} getTaskList={props.getTaskList} task={props.task} /></td>
            <td>{props.task.task}</td>
            <td><DatePicker value={formattedDate} /></td>
            <td>{props.task.priority}</td>
            <td><DeleteButton id={props.id} getTaskList={props.getTaskList} /></td>
        </tr>

    )

}

export default TaskItem;