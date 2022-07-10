import React from "react";
import {addPostActionCreate, uppDataNewPostTextActionCreate} from "../../../redax/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



/*const MyPostsConteiner = (props) => {*/
/*let state = props.store.getState();
        let addPost = () => {
            props.dispatch(addPostActionCreate())
        }
        let postChange = (text) => {
            let action = uppDataNewPostTextActionCreate(text);
            props.dispatch(action)
        }*/
/* <StoreContext.Consumer>
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
    </StoreContext.Consumer>*/

let mapStateToProps =(state)=>{
    return{
        newPostText:state.profilePage.newPostText,
        postsData:state.profilePage.postsData
    }
}
let mapDispatchToProps =(dispatch)=>{
    return {
        addPostActionCreate: ()=>{
            dispatch(addPostActionCreate())},
        uppDataNewPostTextActionCreate: (text)=>{
            dispatch(uppDataNewPostTextActionCreate(text))},
    }
}
const MyPostsConteiner = connect (mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsConteiner;
