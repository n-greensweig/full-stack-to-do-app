import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../Form/Form';
import TaskList from '../TaskList/TaskList';

function App() {

  const [taskList, setTaskList] = useState([]);

  const getTaskList = () => {

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
      <TaskList getTaskList={getTaskList} taskList={taskList} />

    </div>
  );

}

export default App
