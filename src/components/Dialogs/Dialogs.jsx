import React from "react";
import classes from "./Dialogs.module.css";
import DialogsUser from "./DialogsUser/DialogsUser";
import Messages from "./Messsages/Messages";


const Dialogs = (props) => {
    let addMessagesElement = React.createRef();
    let addMessages = ()=>{
        let text = addMessagesElement.current.value
        alert(text)
    }

    let dialogsElement=
        props.state.dialogsPage.dialogsData.map(d => <DialogsUser name={d.name} id={d.id}/>)  /*замапили массив данных*/
    let messagesElement=
        props.state.dialogsPage.messagesData.map( m => <Messages text={m.text}/>)             /*замапили массив данных*/

    return (
        <div className={classes.dialogs}>
            <div  className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div>
                    <textarea ref={addMessagesElement}> </textarea>
                </div>
                <div>
                    <button onClick={addMessages}> addMessages </button>
                </div>
                {messagesElement}
            </div>
        </div>)
}
export default Dialogs