const addMessages = 'ADD-MESSAGES';
const uppDataText = 'UPP-DATA-TEXT';

const DialogsReducer = (state, action) => {
    switch (action.type){
        case 'ADD-MESSAGES':
            let newMessages = {
                id: 2,
                text: state.newText
            }
            state.messagesData.push(newMessages);
            state.newText = ' '
            return  state;
        case 'UPP-DATA-TEXT':
            state.newText = action.text;
            return state;
        default:
            return state;
    }

   /*   if (action.type === 'ADD-MESSAGES'){
        let newMessages = {
            id: 2,
            text: state.newText
        }
        state.messagesData.push(newMessages);
        state.newText = ' '

    }
    else if (action.type === 'UPP-DATA-TEXT'){
        state.newText = action.text;

    }
    return state*/
}
export const addMessagesActionCreate=()=>({type: addMessages})
export const uppDatsTextActionCreate=(newText)=>({type: uppDataText,text:newText})
export default DialogsReducer