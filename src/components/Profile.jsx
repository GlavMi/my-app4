import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src = 'https://n1s1.elle.ru/67/87/f5/6787f53ff378de2665b5aeeb9f0678c4/2338x1256_0xd42ee42a_17048057571391938245.jpeg'/>
        </div>

        <div>
            Ava + discription
        </div>

        <div>
            My posts
        </div>

        <div>
            New posts
        </div>

        <div>

            <div className={classes.item}> Post 1 </div>

            <div className={classes.item}> Post 2 </div>

        </div>
    </div>
}
export default Profile