import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../Form/Form';
import SortTasks from '../SortTasks/SortTasks';
import './App.css';
import SearchTasks from '../SearchTasks/SearchTasks';
import MainHeading from '../Headers/MainHeading/MainHeading';

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
      <MainHeading />

      <Form getTaskList={getTaskList} />
      {/* <div className='flex'> */}
        <SortTasks getTaskList={getTaskList} />
      {/* </div> */}
        <SearchTasks taskList={taskList} getTaskList={getTaskList} />

    </div>
  );

}

export default App
