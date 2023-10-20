import './List.css';

function List(props) {

    console.log(props);

    return (
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Due date</th>
                    <th>Priority</th>
                    <th>Completed?</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="table-data">{props.task.task}</td>
                    <td className="table-data">{(new Date(props.task.due)).toLocaleString()}</td>
                    <td className="table-data">{props.task.priority}</td>
                    <td className="table-data"><button>Completed</button></td>
                    <td className="table-data"><button>Delete</button></td>
                </tr>
            </tbody>
        </table>
    )


}

export default List;