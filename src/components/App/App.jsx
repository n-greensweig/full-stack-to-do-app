import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../Form/Form';
import TaskList from '../TaskList/TaskList';
import SortTasks from '../SortTasks/SortTasks';
import './App.css';
import SearchTasks from '../SearchTasks/SearchTasks';

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
        <h1>Reminders</h1>
      </div>

      <Form getTaskList={getTaskList} />
      <div className='flex'>
        <SortTasks getTaskList={getTaskList} />
        <SearchTasks />
      </div>
      <h2>To-do List</h2>
      <TaskList getTaskList={getTaskList} taskList={taskList} />

    </div>
  );

}

export default App
