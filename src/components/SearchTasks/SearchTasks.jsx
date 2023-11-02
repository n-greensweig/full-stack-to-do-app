import { useState } from "react";
import axios from "axios";

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
function SearchTasks(props) {


    const [search, setSearch] = useState();
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {

        event.preventDefault();

        axios.get(`/todo/search?q=${search}`)
            .then(response => {
                props.setTaskList(response.data);
                setSearchResults(response.data);
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong.');
            });

    };

    return (
        <form onChange={handleSearch} onSubmit={handleSearch} >
            <FormControl>
                <TextField
                    label='Search'
                    variant='outlined'
                    onChange={e => setSearch(e.target.value)}
                    value={search} />
            </FormControl>
        </form>
    )

}

export default SearchTasks;