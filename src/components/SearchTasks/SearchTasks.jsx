import { useState } from "react";
import axios from "axios";
import TaskList from "../TaskList/TaskList";
import ListSubHeading from "../Headers/ListSubHeading/ListSubHeading";
import ButtonComponent from "../Buttons/ButtonComponent/ButtonComponent";
function SearchTasks(props) {


    const [search, setSearch] = useState();
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {

        event.preventDefault();

        axios.get(`/todo/search?q=${search}`)
            .then(response => {
                setSearchResults(response.data);
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong.');
            });

    };

    const combinedTaskList = searchResults.length > 0 ? searchResults : props.taskList;

    return (
        <>
            <form onChange={handleSearch} onSubmit={handleSearch} >
                <h3>Search</h3>
                <input value={search} onChange={e => setSearch(e.target.value)} />
                <ButtonComponent type='submit' name={'Search'} />
            </form>
            <ListSubHeading />
            <TaskList taskList={combinedTaskList} getTaskList={props.getTaskList} />
        </>
    )

}

export default SearchTasks;