import React from "react";
import classes from "./Dialogs.module.css";
import DialogsUser from "./DialogsUser/DialogsUser";
import Messages from "./Messsages/Messages";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div  className={classes.dialogsItem}>
                <DialogsUser name={'Mikhail'} id={'1'}/>
                <DialogsUser name={'Nady'} id={'2'}/>
                <DialogsUser name={'Dmitriy'} id={'3'}/>
                <DialogsUser name={'Alex'} id={'4'}/>
            </div>
            <div className={classes.messages}>
                <Messages text={'Hello!'}/>
                <Messages text={'How are you?'}/>
                <Messages text={'I am fine!'}/>
            </div>
        </div>)
}
export default Dialogs