import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
function Dropdown(props) {

    return (
        <Select
            className='margin'
            labelId="dropdown-label"
            id="dropdown"
            value={props.priority}
            label="Priority"
            onChange={e => props.setPriority(e.target.value)}
        >
            <MenuItem value={'Low'}>Low</MenuItem>
            <MenuItem value={'Medium'}>Medium</MenuItem>
            <MenuItem value={'High'}>High</MenuItem>
        </Select>
    )

}

export default Dropdown;