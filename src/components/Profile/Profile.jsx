import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
const Profile = (props) => {


    return (
        <div className={classes.content}>

            <ProfileInfo/>

            <MyPosts state ={props.state.profilePage.postsData}
                     addPost = {props.addPost}
                     newPostText = {props.state.profilePage.newPostText}
                     uppDateNewPostText ={props.uppDateNewPostText}/>


        </div>)
}
export default Profile