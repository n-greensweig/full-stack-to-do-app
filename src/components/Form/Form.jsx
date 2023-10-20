import './Form.css';

function Form() {


const addTask = () => {

};

    return (
        <div id="form">
            <form>
                <span>Add a to-do</span><br></br><br></br>
                <label>Task: </label>
                <input className='margin'  placeholder="Buy milk..." required />
                <label>Due Date: </label>
                <input className='margin' placeholder="2023-10-20" />
                <label>Priority: </label>
                <select className='margin'>
                    <option className="gray">Select an option....</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <button type='submit' onClick={addTask}>Save</button>
            </form>
        </div>
    );
}

export default Form;