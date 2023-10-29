
function SortTasks(props) {

    // GET request that SORTS by completed, id, dueDate, priority and ASC, DESC
    // as user suggests via drop-down


    return (
        <>
            <h3>Sort</h3>
            <select>
                <option>Completion status</option>
                <option>Date</option>
                <option>Priority</option>
            </select>
        </>
    )

}

export default SortTasks;