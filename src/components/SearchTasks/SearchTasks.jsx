import { useState } from "react";
import axios from "axios";
function SearchTasks() {

    const [search, setSearch] = useState();

    // We need to send a get request for all items in DB
    // with ILIKE {input}. Thus, we need a GET request

    const handleSearch = (event) => {

        console.log(search);
        event.preventDefault();
        console.log(search);

        axios.get(`/todo?q=${search}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong.');
            });

    };

    return (
        <>
            <h3>Search</h3>
            <form onSubmit={handleSearch}>
                <input value={search} onChange={e => setSearch(e.target.value)} />
            </form>
            <p>{search}</p>
        </>
    )

}

export default SearchTasks;