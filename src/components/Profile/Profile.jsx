import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
    <div className={classes.content}>
        <div>
            <img src = 'https://n1s1.elle.ru/67/87/f5/6787f53ff378de2665b5aeeb9f0678c4/2338x1256_0xd42ee42a_17048057571391938245.jpeg'/>
        </div>

        <div>
            Ava + description
        </div>

         <MyPosts/>


    </div>)
}
export default Profile