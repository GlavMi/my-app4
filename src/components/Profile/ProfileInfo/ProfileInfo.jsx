import React from "react";
import classes from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
    return (
    <div className={classes.content}>
        <div>
            <img src = 'https://n1s1.elle.ru/67/87/f5/6787f53ff378de2665b5aeeb9f0678c4/2338x1256_0xd42ee42a_17048057571391938245.jpeg'/>
        </div>

        <div className={classes.item}>
            Ava + description
        </div>



    </div>)
}
export default ProfileInfo