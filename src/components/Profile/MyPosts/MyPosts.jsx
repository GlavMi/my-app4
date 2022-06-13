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

       <Posts/>
        <Posts/>
        <Posts/>
</div>
}
 export default MyPosts;
