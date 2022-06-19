import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return <div>
        <div className={classes.item}>
            <h3>My posts</h3>
        </div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button> Add post</button>
        </div>
        <div>
            <Posts messages="Hi! how are you?" numberLike="2"/>
            <Posts messages="It's my first post!" numberLike="19"/>
        </div>
    </div>
}
export default MyPosts;
