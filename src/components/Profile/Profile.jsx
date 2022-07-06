import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPosts.Conteiner";
const Profile = (props) => {


    return (
        <div className={classes.content}>

            <ProfileInfo/>

            <MyPostsConteiner store={props.store} dispatch={props.dispatch}/>


        </div>)
}
export default Profile