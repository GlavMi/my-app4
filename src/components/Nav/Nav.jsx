import React from "react";
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return  <div className={classes.nav} >

        <div className={classes.item}>
            <NavLink to = '/profile'  >  Profile </NavLink>
        </div>
        <div className = {classes.item} >
            <NavLink to = '/dialogs' activeClassName={classes.active}>  Messages </NavLink>
        </div>
        <div className={classes.item} >
            <NavLink to = '/news'>  News </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to = '/music'> Music </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to = '/setting'> Setting </NavLink>
        </div>

    </div>
}
export default  Nav