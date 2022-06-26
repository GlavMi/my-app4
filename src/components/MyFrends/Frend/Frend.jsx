import React from "react";
import classes from "./Frend.module.css";


const Frend = (props) => {

    return <div className={classes.Frend}>

       <div>
           {props.name}
       </div>

    </div>
}
export default Frend