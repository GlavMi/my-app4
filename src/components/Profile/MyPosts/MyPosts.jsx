import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return   <div >
        <div className={classes.item}>
            My posts
        </div>
        <textarea></textarea>
        <button> Add post </button>
        <Posts messages = "Hi! how are you?" numberLike = "2"/>
        <Posts messages = "It's my first post!"numberLike = "19"/>
</div>
}
 export default MyPosts;
