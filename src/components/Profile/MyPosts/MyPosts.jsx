import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: "Hi! how are you?", likeCounter: "25"},
        {id: 2, message: "It's my first post!", likeCounter: "19"}

    ]
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
            <Posts messages={postsData[0].message} numberLike={postsData[0].likeCounter}/>
            <Posts messages={postsData[1].message} numberLike={postsData[1].likeCounter}/>
        </div>
    </div>
}
export default MyPosts;
