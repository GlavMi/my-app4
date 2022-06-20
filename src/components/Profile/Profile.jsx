import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./MyPosts/Posts/Posts";

const Profile = () => {
    let postsData = [
        {id: 1, message: "Hi! how are you?", likeCounter: "25"},
        {id: 2, message: "It's my first post!", likeCounter: "19"},
        {id: 2, message: "It's my first post!", likeCounter: "19"},
        {id: 2, message: "It's my first post!", likeCounter: "19"},
        {id: 2, message: "It's my first post!", likeCounter: "19"},
        {id: 2, message: "It's my first post!", likeCounter: "19"}
    ]
    let postsElement=postsData.map(p => <Posts messages={p.message} numberLike={p.likeCounter}/>)
    return (
        <div className={classes.content}>

            <ProfileInfo/>

            {postsElement}


        </div>)
}
export default Profile