import React from "react";
import classes from "./Messages.module.css";


const Messages = (props) => {
    return (
       <div>
           <div className={classes.messages}> Hello! </div>
           <div className={classes.messages}> How are you? </div>
           <div className={classes.messages}> I am fine! </div>

        </div>)
}
export default Messages