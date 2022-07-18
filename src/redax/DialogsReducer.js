const addMessages = 'ADD-MESSAGES';
const uppDataText = 'UPP-DATA-TEXT';
let initialState = {dialogsData: [
        {id: 1, name: 'Mikhail'},
        {id: 2, name: 'Nady'},
        {id: 3, name: 'Dmitriy'},
        {id: 4, name: 'Alex'}],
    messagesData: [
        {id: 1, text: 'Hello!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'How are you?'},
        {id: 4, text: 'How are you?'},
        {id: 5, text: 'I am fine!'}],
    newText: 'glav_mi'

}
const DialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD-MESSAGES':
            let newText = state.newText
            return {
                ...state,
                newText: ' ',
                messagesData:[...state.messagesData, {id: 6, text: newText}]
            }
        /*{
            let newMessages = {
                id: 6,
                text: state.newText
            }
            let copyState = {...state}
            copyState.messagesData=[...state.messagesData]
            copyState.messagesData.push(newMessages);
            copyState.newText = ' '
            return  copyState;}*/
        case 'UPP-DATA-TEXT':
            return {
                ...state,
                newText : action.text
            }

        /*{
            let copyState = {...state}
            copyState.newText = action.text;
            return copyState;}*/
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