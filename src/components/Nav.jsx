import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
    return  <div className={classes.nav}>

        <div className={`${classes.item} ${classes.active}`}>
            <a> Profile </a>
        </div>
        <div className={classes.item}>
            <a> Messages </a>
        </div>
        <div className={classes.item}>
            <a> News </a>
        </div>
        <div className={classes.item}>
            <a> Setting </a>
        </div>

    </div>
}
export default  Nav