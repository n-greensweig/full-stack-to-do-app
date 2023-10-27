import { useState } from 'react';
import axios from 'axios';
import './Form.css';

function Form(props) {

    // Variables for each user input field
    const [task, setTask] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');

    // POST request to run on form submission
    const sendTaskToServer = event => {

        event.preventDefault();

        axios.post('/todo', {
            task: task,
            dueDate: dueDate,
            priority: priority,
        })
            .then(response => {
                props.getTaskList();
                setTask('');
                setDueDate('');
                setPriority('');
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong.');
            });

    };


    return (

        // User input form
        <div id="form">
            <form onSubmit={sendTaskToServer}>
                <span>Add a to-do</span><br></br><br></br>

                {/* First input field */}
                <label htmlFor='task-input'>Task: </label>
                <input id='task-input' value={task} className='margin' placeholder="Buy milk..." onChange={e => setTask(e.target.value)} required />
                
                {/* Second input field */}
                <label htmlFor='due-input'>Due Date: </label>
                <input id='due-input' value={dueDate} className='margin' placeholder="2023-10-20" onChange={e => setDueDate(e.target.value)} />
                
                {/* Priority drop-down */}
                <label htmlFor='priority-input'>Priority: </label>
                <select id='priority-input' value={priority} className='margin' onChange={e => setPriority(e.target.value)}>
                    <option className="gray">Select an option....</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                
                {/* Submit button */}
                <button type='submit'>Save</button>
            </form>
        </div>

    );
}

export default Form;