import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import MyFrendsReducer from "./MyFrendsReducer";


/*const addpost = 'ADD-POST';
const uppdatanewposttext = 'UPP-DATA-NEW-POST-TEXT';
const addMessages = 'ADD-MESSAGES';
const uppDataText = 'UPP-DATA-TEXT';*/
let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi! how are you?", likeCounter: "25"},
                {id: 2, message: "It's my first post!", likeCounter: "19"},
                {id: 3, message: "It's my first post!", likeCounter: "19"},

            ],
            newPostText: 'Glav_Mi'

        },
        dialogsPage: {
            dialogsData: [
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
        },
        myFrends: {
            myFrends: [
                {id: 1, name: 'Mikhail'},
                {id: 2, name: 'Nady'},
                {id: 3, name: 'Dmitriy'},
                {id: 4, name: 'Alex'}]
        }
    },
    rerender() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.rerender = observer
    },

   /* addPost() {
        let newPost = {
            id: 7,
            message: this._state.profilePage.newPostText,
            likeCounter: "0"
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ' '
        this.rerender(this._state)
    },
    uppDateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this.rerender(this._state)
    },
    addMessages() {
        let newMessages = {
            id: 2,
            text: this._state.dialogsPage.newText
        }
        this._state.dialogsPage.messagesData.push(newMessages);
        this._state.dialogsPage.newText = ' '
        this.rerender(this._state)
    },
    uppDateText(text) {
        this._state.dialogsPage.newText = text;
        this.rerender(this._state)
    },*/


    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
      /*  if (action.type === 'ADD-POST') {
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likeCounter: "0"
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ' '
            this.rerender(this._state)

        }
        else if (action.type === 'UPP-DATA-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
            this.rerender(this._state)
        }*/

        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        /*else if (action.type === 'ADD-MESSAGES'){
            let newMessages = {
                id: 2,
                text: this._state.dialogsPage.newText
            }
            this._state.dialogsPage.messagesData.push(newMessages);
            this._state.dialogsPage.newText = ' '
            this.rerender(this._state)
        }
        else if (action.type === 'UPP-DATA-TEXT'){
            this._state.dialogsPage.newText = action.text;
            this.rerender(this._state)
        }*/
        this._state.myFrends = MyFrendsReducer(this._state.myFrends, action)


        this.rerender(this._state)


    }
}



/*export const addPostActionCreate =()=>({type: addpost})
export const uppDataNewPostTextActionCreate=(text)=>({type: uppdatanewposttext,newText:text })*/


/*export const addMessagesActionCreate=()=>({type: addMessages})
export const uppDatsTextActionCreate=(newText)=>({type: uppDataText,text:newText})*/

export default store