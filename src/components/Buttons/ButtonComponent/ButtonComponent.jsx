import Button from '@mui/material/Button';

function ButtonComponent(props) {

    return (
        <Button variant='outlined' sx={{height: '55px',  backgroundColor: 'navy', color: 'white', border: 'navy', '&:hover': {
            backgroundColor: 'white',
            borderColor: 'navy',
            color: 'navy'
        }}} onClick={props.function} >{props.name}</Button>
    )

}

export default ButtonComponent;