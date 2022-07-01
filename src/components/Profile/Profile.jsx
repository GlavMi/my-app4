import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
const Profile = (props) => {


    return (
        <div className={classes.content}>

            <ProfileInfo/>

            <MyPosts state ={props.state.profilePage.postsData}
                     dispatch={props.dispatch}
                     newPostText = {props.state.profilePage.newPostText}
                /*addPost = {props.addPost}
                uppDateNewPostText ={props.uppDateNewPostText}*//>


        </div>)
}
export default Profile