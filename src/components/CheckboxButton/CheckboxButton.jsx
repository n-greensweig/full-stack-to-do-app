import { Checkbox } from "@mui/material";
import { useState, useEffect } from "react";

function CheckboxButton(props) {

    props.completed ? <Checkbox checked={true} onClick={props.toggleCompleted} /> : <Checkbox checked={true} onClick={props.toggleCompleted} />;

}

export default CheckboxButton;