import Button from '@mui/material/Button';

function ButtonComponent(props) {

    return (
        <Button variant='outlined' sx={{height: '55px'}} onClick={props.function} >{props.name}</Button>
    )

}

export default ButtonComponent;