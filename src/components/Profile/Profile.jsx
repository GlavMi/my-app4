import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./MyPosts/Posts/Posts";
import MyPosts from "./MyPosts/MyPosts";
import App from "../../App";

const Profile = (props) => {


    return (
        <div className={classes.content}>

            <ProfileInfo/>

          <MyPosts postsData ={props.postsData}/>


        </div>)
}
export default Profile