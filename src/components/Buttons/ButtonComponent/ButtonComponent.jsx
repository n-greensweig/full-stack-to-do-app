function ButtonComponent(props) {

    return (
        <button type={props.type} className={`${props.name}-button`}>{props.name}</button>
    )

}

export default ButtonComponent;