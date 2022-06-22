import React from "react";
import classes from "./Dialogs.module.css";
import DialogsUser from "./DialogsUser/DialogsUser";
import Messages from "./Messsages/Messages";
import App from "../../App";

const Dialogs = (props) => {
    let dialogsElement=props.dialogsData.map(d => <DialogsUser name={d.name} id={d.id}/>)    /*замапили массив данных*/
    let messagesElement=props.messagesData.map( m => <Messages text={m.text}/>)              /*замапили массив данных*/

    return (
        <div className={classes.dialogs}>
            <div  className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>)
}
export default Dialogs