import React from "react";
import classes from "./Posts.module.css";


const Posts = (props) => {
    return   <div className={classes.content}>
        <div>
            <img src = "https://static.wikia.nocookie.net/0c9787f8-4011-4dbe-9ca0-44fafba10dec" />
        </div>

            <div className={classes.item}>
                {props.messages}
            </div>

        <span> Like {props.numberLike} </span>

    </div>




}
export default Posts;
