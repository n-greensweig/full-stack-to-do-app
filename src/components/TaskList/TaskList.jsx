import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';
import { Grid } from '@mui/material';

function TaskList(props) {

    // Table of task items
    return (

        // <table>
        //     <thead>
        //         <tr>
        //             <th></th>
        //             <th>Task</th>
        //             <th>Due Date</th>
        //             <th>Priority</th>
        //             <th></th>
        //         </tr>
        //     </thead>
        //     <tbody>{props.taskList.map(task => <TaskItem id={task.id} getTaskList={props.getTaskList} task={task} />)}
        //     </tbody>
        // </table>

        <Grid container spacing={2}>
            {
                props.taskList.map(task => <TaskItem id={task.id} getTaskList={props.getTaskList} task={task} />)
            }
        </Grid>

    )

}

export default TaskList;