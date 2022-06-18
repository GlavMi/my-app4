import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./DialogUser.module.css";


const DialogsUser = (props) => {
    return (
       <div className={classes.dialogs}>
           <div className={classes.item}>
           <NavLink to={'/dialogs/1'} className={({isActive}) => (isActive ? classes.active:classes.item)}> Mikhail </NavLink>
           </div>
           <div className={classes.item}>
               <NavLink to={'/dialogs/2'} className={({isActive}) => (isActive ? classes.active:classes.item)}> Nady </NavLink>
           </div>
           <div className={classes.item}>
               <NavLink to={'/dialogs/3'} className={({isActive}) => (isActive ? classes.active:classes.item)}> Dmitriy </NavLink>
           </div>
           <div className={classes.item}>
               <NavLink to={'/dialogs/4'} className={({isActive}) => (isActive ? classes.active:classes.item)}> Alex </NavLink>
           </div>
        </div>)
}
export default DialogsUser