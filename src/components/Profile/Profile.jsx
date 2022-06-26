import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
const Profile = (props) => {


    return (
        <div className={classes.content}>

            <ProfileInfo/>

            <MyPosts state ={props.state.profilePage.postsData}/>


        </div>)
}
export default Profile