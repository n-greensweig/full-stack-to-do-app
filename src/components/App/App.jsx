import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../Form/Form';
import List from '../List/List';

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
      {
        taskList.map(task => <List key={task.id} task={task} />)
      }

    </div>
  );

}

export default App
