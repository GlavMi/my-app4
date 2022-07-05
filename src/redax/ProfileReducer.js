const addpost = 'ADD-POST';
const uppdatanewposttext = 'UPP-DATA-NEW-POST-TEXT';
let initialState = {
    postsData: [
        {id: 1, message: "Hi! how are you?", likeCounter: "25"},
        {id: 2, message: "It's my first post!", likeCounter: "19"},
        {id: 3, message: "It's my first post!", likeCounter: "19"},

    ],
    newPostText: 'Glav_Mi'
}
const ProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD-POST':
            let newPost = {
                id: 7,
                message: state.newPostText,
                likeCounter: "0"
            }
            state.postsData.push(newPost)
            state.newPostText = ' ';
            return state;
        case 'UPP-DATA-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }

    /*if (action.type === 'ADD-POST') {
        let newPost = {
            id: 7,
            message: state.newPostText,
            likeCounter: "0"
        }
        state.postsData.push(newPost)
        state.newPostText = ' '
    } else if (action.type === 'UPP-DATA-NEW-POST-TEXT') {
        state.newPostText = action.newText

    }
    return state*/
}
export const addPostActionCreate =()=>({type: addpost})
export const uppDataNewPostTextActionCreate=(text)=>({type:uppdatanewposttext,newText:text })
export default ProfileReducer