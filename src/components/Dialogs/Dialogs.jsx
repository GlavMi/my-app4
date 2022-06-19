import React from "react";
import classes from "./Dialogs.module.css";
import DialogsUser from "./DialogsUser/DialogsUser";
import Messages from "./Messsages/Messages";

const Dialogs = (props) => {
    let dialogsData=[
        {id:1, name:'Mikhail'},
        {id:2, name:'Nady'},
        {id:3, name:'Dmitriy'},
        {id:4, name:'Alex'},
    ]
    let messagesData=[
        {id:1, text:'Hello!'},
        {id:1, text:'How are you?'},
        {id:1, text:'I am fine!'}
    ]
    return (
        <div className={classes.dialogs}>
            <div  className={classes.dialogsItem}>
                <DialogsUser name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsUser name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsUser name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsUser name={dialogsData[3].name} id={dialogsData[3].id}/>


            </div>
            <div className={classes.messages}>
                <Messages text={messagesData[0].text}/>
                <Messages text={messagesData[1].text}/>
                <Messages text={messagesData[2].text}/>

            </div>
        </div>)
}
export default Dialogs