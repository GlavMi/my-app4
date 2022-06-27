import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";


const MyPosts = (props) => {
    let postsElement=props.state.map(p => <Posts messages={p.message} numberLike={p.likeCounter}/>)
    let postElement = React.createRef()

    /*создаем функцию добавления текста в пост при нажатии кнопки*/
    let addPost = ()=> {
        let post = postElement.current.value;/*достаем введеную  инфрмации ввода из сылки в переменную*/
        props.addPost(post) /*опрокидваем введенную информацию через пропсы в state */
        postElement.current.value=' '/*обнуляем окно ввода */
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
