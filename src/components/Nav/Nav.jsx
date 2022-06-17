import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
    return  <div className={classes.nav}>

        <div className={`${classes.item} ${classes.active}`}>
            <a href = '/profile'> Profile </a>
        </div>
        <div className={classes.item}>
            <a href = '/dialogs'> Messages </a>
        </div>
        <div className={classes.item}>
            <a href = '/news'> News </a>
        </div>
        <div className={classes.item}>
            <a href = '/music'> Music </a>
        </div>
        <div className={classes.item}>
            <a href = '/setting'> Setting </a>
        </div>

    </div>
}
export default  Nav