import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";



const MyPosts = (props) => {
    let postsElement = props.postsData.map(p => <Posts messages={p.message} numberLike={p.likeCounter}/>)
    let postElement = React.createRef()
    let addPost = () => {
        props.addPostActionCreate()
    }
    let postChange = () => {
        let text = postElement.current.value;
        props.uppDataNewPostTextActionCreate(text)
    }
    return <div>
        <div className={classes.item}>
            <h3>My posts</h3>
        </div>
        <div>
            <textarea ref={postElement} onChange={postChange} value={props.newPostText}> </textarea>
        </div>
        <div>
            <button onClick={addPost}> addPost</button>
        </div>
        <div>
            {postsElement}
        </div>
    </div>

}
export default MyPosts;
