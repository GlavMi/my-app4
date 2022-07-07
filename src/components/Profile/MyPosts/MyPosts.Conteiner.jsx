import React from "react";
import {addPostActionCreate, uppDataNewPostTextActionCreate} from "../../../redax/ProfileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsConteiner = (props) => {
    /*let state = props.store.getState();
        let addPost = () => {
            props.dispatch(addPostActionCreate())
        }
        let postChange = (text) => {
            let action = uppDataNewPostTextActionCreate(text);
            props.dispatch(action)
        }*/
    return <StoreContext.Consumer>
        {

            store => {
                let addPost = () => {
                    store.dispatch(addPostActionCreate())
                }
                let postChange = (text) => {
                    let action = uppDataNewPostTextActionCreate(text);
                    store.dispatch(action)
                }
                return <MyPosts addPostActionCreate={addPost}
                                uppDataNewPostTextActionCreate={postChange}
                                newPostText={store.getState().profilePage.newPostText}
                                postsData={store.getState().profilePage.postsData}/>
            }}
    </StoreContext.Consumer>
}
export default MyPostsConteiner;
