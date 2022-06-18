import React from "react";
import classes from "../Dialogs.module.css";


const Messages = (props) => {
    return (
       <div>
           <div className={classes.message}> Hello! </div>
           <div className={classes.message}> How are you? </div>
           <div className={classes.message}> I am fine! </div>

        </div>)
}
export default Messages