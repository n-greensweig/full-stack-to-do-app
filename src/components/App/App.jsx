import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../Form/Form';
import TaskList from '../TaskList/TaskList';
import SortTasks from '../SortTasks/SortTasks';

function App() {

  const [taskList, setTaskList] = useState([]);

  const getTaskList = () => {

    console.log(`in toggleCompleted task value`, taskList);

    axios.get('/todo')
      .then(response => {
        setTaskList(response.data);
      })
      .catch(error => {
        console.error(error);
        alert('Something went wrong.');
      });

  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div id='container'>
      <div>
        <h1>TO DO APP</h1>
      </div>

      <Form getTaskList={getTaskList} />
      <SortTasks getTaskList={getTaskList} />
      <TaskList getTaskList={getTaskList} taskList={taskList} />

    </div>
  );

}

export default App
