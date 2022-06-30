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
    getState(){
        return this._state;
    },
    rerender() {},
    addPost() {
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
        /*this._state.dialogsPage.newText = ' '*/
        this.rerender(this._state)
    },
    uppDateText(newText) {
        this._state.dialogsPage.newText = newText;
        this.rerender(this._state)
    },
    subscribe(observer) {
        this.rerender = observer
    },
}
export default store