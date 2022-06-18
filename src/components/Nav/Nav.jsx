import React from "react";
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";



const Nav = (props) => {
    return  <div className={classes.nav} >

        <div className={classes.item}>
            <NavLink to = '/profile' className={({isActive}) => (isActive ? classes.active:classes.item)} >  Profile </NavLink>
        </div>
        <div className = {classes.item} >
            <NavLink to = '/dialogs' className={({isActive}) => (isActive ? classes.active:classes.item)}>  Messages </NavLink>
        </div>
        <div className={classes.item} >
            <NavLink to = '/news' className={({isActive}) => (isActive ? classes.active:classes.item)}>  News </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to = '/music' className={({isActive}) => (isActive ? classes.active:classes.item)}> Music </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to = '/setting' className={({isActive}) => (isActive ? classes.active:classes.item)}> Setting </NavLink>
        </div>

    </div>
}
export default  Nav