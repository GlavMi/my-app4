import React from "react";
import {addPostActionCreate, uppDataNewPostTextActionCreate} from "../../../redax/ProfileReducer";
import MyPosts from "./MyPosts";


const MyPostsConteiner = (props) => {
let state = props.store.getState();
    let addPost = () => {
        props.dispatch(addPostActionCreate())
    }
    let postChange = (text) => {
        let action = uppDataNewPostTextActionCreate(text);
        props.dispatch(action)
    }
    return <MyPosts addPostActionCreate={addPost}
                    uppDataNewPostTextActionCreate ={postChange}
                    newPostText = {state.profilePage.newPostText}
                    postsData = {state.profilePage.postsData}/>
}
export default MyPostsConteiner;
