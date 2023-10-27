import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';

function TaskList(props) {

    return (
        <table>
            <thead>To-do List</thead>
            <tr>
                <th>Completed?</th>
                <th>Task</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Delete</th>
            </tr>
            <tbody>
                {props.taskList.map(task => <TaskItem key={task.id} task={task} />)}
            </tbody>
        </table>
    )

    return (
        <>
            <h1>Tasks:</h1>
            <ul>
                {props.taskList.map(task => <TaskItem key={task.id} task={task} />)}
            </ul>
        </>
    )

}

export default TaskList;