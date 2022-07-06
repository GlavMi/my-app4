import React from "react";
import {addMessagesActionCreate, uppDatsTextActionCreate} from "../../redax/DialogsReducer";
import Dialogs from "./Dialogs";

const DialogsConteiner = (props) => {
    let state = props.store.getState();

    let addMessages = () => {
        props.dispatch(addMessagesActionCreate())
    }
    let textChange = (newText) => {
        let action = uppDatsTextActionCreate(newText)
        props.dispatch(action)
    }


    return <Dialogs addMessagesActionCreate={addMessages}
                    uppDatsTextActionCreate={textChange}
                    newText={state.dialogsPage.newText}
                    dialogsData = {state.dialogsPage.dialogsData}
                    messagesData ={state.dialogsPage.messagesData}/>
}
export default DialogsConteiner