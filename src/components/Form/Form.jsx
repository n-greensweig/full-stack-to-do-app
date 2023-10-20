import './Form.css';

function Form() {

    return (
        <div id="form">
            <form>
                <span>Add a to-do</span><br></br><br></br>
                <label htmlFor='task-input'>Task: </label>
                <input id='task-input' className='margin' placeholder="Buy milk..." required />
                <label htmlFor='due-input'>Due Date: </label>
                <input id='due-input' className='margin' placeholder="2023-10-20" />
                <label htmlFor='priority-input'>Priority: </label>
                <select id='priority-input' className='margin'>
                    <option className="gray">Select an option....</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <button type='submit'>Save</button>
            </form>
        </div>
    );
}

export default Form;