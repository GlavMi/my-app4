import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";


const MyPosts = (props) => {

    let postsElement=props.state.map(p => <Posts messages={p.message} numberLike={p.likeCounter}/>)
    let postElement = React.createRef()
    let addPost = ()=>{
        let text = postElement.current.value;
        alert(text)
}
    return <div>
        <div className={classes.item}>
            <h3>My posts</h3>
        </div>
        <div>
            <textarea ref = {postElement}> </textarea>
        </div>
        <div>
            <button onClick={addPost}> addPost </button>
        </div>
        <div>
            {postsElement}
        </div>
    </div>
}
export default MyPosts;
