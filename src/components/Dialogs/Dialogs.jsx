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

    let dialogsElement=dialogsData.map(d => <DialogsUser name={d.name} id={d.id}/>)    /*замапили массив данных*/
    let messagesElement=messagesData.map( m => <Messages text={m.text}/>)              /*замапили массив данных*/

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