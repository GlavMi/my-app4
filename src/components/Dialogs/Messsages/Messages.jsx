import React from "react";
import classes from "./Messages.module.css";


const Messages = (props) => {
    return (
        <div>
            <div className={classes.messages}> {props.text}</div>
        </div>)
}
export default Messages