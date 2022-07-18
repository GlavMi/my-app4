import React from "react";
import classes from "./Dialogs.module.css";
import DialogsUser from "./DialogsUser/DialogsUser";
import Messages from "./Messsages/Messages";


const Dialogs = (props) => {
    let state = props.dialogsPage

    let addMessagesElement = React.createRef();
    let addMessages = () => {
        props.addMessagesActionCreate()
    }
    let textChange = () => {
        let newText = addMessagesElement.current.value;
        props.uppDatsTextActionCreate(newText)
    }

    let dialogsElement =
        state.dialogsData.map(d => <DialogsUser name={d.name} key = {d.id} id={d.id}/>)  /*замапили массив данных*/
    let messagesElement =
        state.messagesData.map(m => <Messages key = {m.id} text={m.text}/>)             /*замапили массив данных*/

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div>
                    <textarea ref={addMessagesElement} onChange={textChange} value={state.newText}></textarea>
                </div>
                <div>
                    <button onClick={addMessages}> addMessages</button>
                </div>
                {messagesElement}
            </div>
        </div>)
}
export default Dialogs