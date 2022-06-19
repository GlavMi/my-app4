import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./DialogUser.module.css";


const DialogsUser = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.item}>
                <NavLink to={"/dialogs/" + props.id} className={({isActive}) => (isActive ? classes.active : classes.item)}> {props.name} </NavLink>
            </div>
        </div>)
                }
export default DialogsUser