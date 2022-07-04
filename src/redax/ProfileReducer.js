const addpost = 'ADD-POST';
const uppdatanewposttext = 'UPP-DATA-NEW-POST-TEXT';

const ProfileReducer = (state, action) => {
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