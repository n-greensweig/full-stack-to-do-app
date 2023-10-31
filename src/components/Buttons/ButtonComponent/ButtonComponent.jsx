import Button from '@mui/material/Button';

function ButtonComponent(props) {

    return (
        // <button type={props.type} className={`${props.name}-button`}>{props.name}</button>
        <Button variant='outlined' onClick={props.function} >{props.name}</Button>
    )

}

export default ButtonComponent;