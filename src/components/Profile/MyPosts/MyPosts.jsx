import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: "Hi! how are you?", likeCounter: "25"},
        {id: 2, message: "It's my first post!", likeCounter: "19"},
        {id: 2, message: "It's my first post!", likeCounter: "19"},
        {id: 2, message: "It's my first post!", likeCounter: "19"}
    ]
    let postsElement=postsData.map(p => <Posts messages={p.message} numberLike={p.likeCounter}/>)
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
            {postsElement}
        </div>
    </div>
}
export default MyPosts;
