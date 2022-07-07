import React from "react";
import {addMessagesActionCreate, uppDatsTextActionCreate} from "../../redax/DialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsConteiner = (props) => {
    /*let state = props.store.getState();

    let addMessages = () => {
        props.dispatch(addMessagesActionCreate())
    }
    let textChange = (newText) => {
        let action = uppDatsTextActionCreate(newText)
        props.dispatch(action)
    }*/


    return <StoreContext.Consumer>
        {
            store => {
                let addMessages = () => {
                    store.dispatch(addMessagesActionCreate())
                }
                let textChange = (newText) => {
                    let action = uppDatsTextActionCreate(newText)
                    store.dispatch(action)
                }
                return <Dialogs addMessagesActionCreate={addMessages}
                                uppDatsTextActionCreate={textChange}
                                newText={store.getState().dialogsPage.newText}
                                dialogsData={store.getState().dialogsPage.dialogsData}
                                messagesData={store.getState().dialogsPage.messagesData}/>
            }
        }</StoreContext.Consumer>
}

export default DialogsConteiner