import React from "react";
import classes from "./Dialogs.module.css";
import DialogsUser from "./DialogsUser/DialogsUser";
import Messages from "./Messsages/Messages";

const Dialogs = (props) => {
    return (

        <div className={classes.dialogs}>
            <div  className={classes.dialogsItem}>
                <DialogsUser/>
            <div className={classes.messages}>
                <Messages/>
            </div>

        </div>



        </div>)
}
export default Dialogs