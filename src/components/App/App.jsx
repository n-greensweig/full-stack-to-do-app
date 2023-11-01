import { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from '../UserForm/UserForm';
import SortTasks from '../SortTasks/SortTasks';
import './App.css';
import SearchTasks from '../SearchTasks/SearchTasks';
import MainHeading from '../Headers/MainHeading/MainHeading';
import TaskList from '../TaskList/TaskList';
import ListSubHeading from '../Headers/ListSubHeading/ListSubHeading';
import Container from '@mui/material/Container';

function App() {

  const [taskList, setTaskList] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [sortedResults, setSortedResults] = useState([]);

  // Get task list from the data base
  const getTaskList = () => {

    // If not sorted, get full task list;
    // else, get sorted task list
    if (!isSorted) {
      axios.get('/todo')
        .then(response => {
          setTaskList(response.data);
        })
        .catch(error => {
          console.error(error);
          alert('Something went wrong with the GET request.');
        });
    } else {
      setTaskList(sortedResults);
    }

  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (

    <Container id='container' maxWidth="md">


      <MainHeading />

      <UserForm getTaskList={getTaskList} />
      <div className='flex'>
        <SortTasks getTaskList={getTaskList} setTaskList={setTaskList} sortedResults={sortedResults} setSortedResults={setSortedResults} isSorted={isSorted} setIsSorted={setIsSorted} />
        <SearchTasks taskList={taskList} getTaskList={getTaskList} setTaskList={setTaskList} />
      </div>
      <ListSubHeading />
      <TaskList taskList={taskList} getTaskList={getTaskList} setTaskList={setTaskList} />

    </Container>

  );

}

export default App;
