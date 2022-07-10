import React from "react";
import {addMessagesActionCreate, uppDatsTextActionCreate} from "../../redax/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


/*let state = props.store.getState();

    let addMessages = () => {
        props.dispatch(addMessagesActionCreate())
    }
    let textChange = (newText) => {
        let action = uppDatsTextActionCreate(newText)
        props.dispatch(action)
    }*/
/*<StoreContext.Consumer>
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
}</StoreContext.Consumer>*/

let mapStateToProps = (state) => {
    return {
        newText: state.dialogsPage.newText,
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        addMessagesActionCreate: ()=>{
            dispatch(addMessagesActionCreate())
        },
        uppDatsTextActionCreate: (newText)=>{
            dispatch(uppDatsTextActionCreate(newText))
        }
    }
}

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsConteiner