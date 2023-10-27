function TaskItem(props) {

    return (
        <tr>
            <td><button>Completed</button></td>
            <td>{props.task.task}</td>
            <td>{props.task.dueDate}</td>
            <td>{props.task.priority}</td>
            <td><button>Delete</button></td>
        </tr>
    )

}

export default TaskItem;