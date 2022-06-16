import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
    return  <div className={classes.nav}>

        <div className={`${classes.item} ${classes.active}`}>
            <a href = '/Profile'> Profile </a>
        </div>
        <div className={classes.item}>
            <a href = '/Dialogs'> Messages </a>
        </div>
        <div className={classes.item}>
            <a href = '/News'> News </a>
        </div>
        <div className={classes.item}>
            <a href = '/Music'> Music </a>
        </div>
        <div className={classes.item}>
            <a href = '/Setting'> Setting </a>
        </div>

    </div>
}
export default  Nav