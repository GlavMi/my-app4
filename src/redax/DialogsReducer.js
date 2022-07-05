const addMessages = 'ADD-MESSAGES';
const uppDataText = 'UPP-DATA-TEXT';
let initialState = {dialogsData: [
        {id: 1, name: 'Mikhail'},
        {id: 2, name: 'Nady'},
        {id: 3, name: 'Dmitriy'},
        {id: 4, name: 'Alex'}],
    messagesData: [
        {id: 1, text: 'Hello!'},
        {id: 1, text: 'How are you?'},
        {id: 1, text: 'How are you?'},
        {id: 1, text: 'How are you?'},
        {id: 1, text: 'I am fine!'}],
    newText: 'glav_mi'

}
const DialogsReducer = (state = initialState, action) => {
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