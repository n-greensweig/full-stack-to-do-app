import Button from '@mui/material/Button';

function ButtonComponent(props) {

    return (
        <Button variant='outlined' onClick={props.function} >{props.name}</Button>
    )

}

export default ButtonComponent;