import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';
import { Grid } from '@mui/material';

function TaskList(props) {

    // MUI grid of task items
    return (

        <Grid container spacing={2}>
            {
                props.taskList.map(task => <TaskItem id={task.id} getTaskList={props.getTaskList} task={task} />)
            }
        </Grid>

    )

}

export default TaskList;