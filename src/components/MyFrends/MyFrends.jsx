import React from "react";
import classes from "./MyFrends.module.css";
import Frend from "./Frend/Frend";





const MyFrends = (props) => {
    let frendElement=
        props.state.myFrends.myFrends.map(d => <Frend name={d.name} />)
    return <div className={classes.MyFrends}>
        <div>
            <h3> My Frends</h3>
        </div>

       <div>
           {frendElement}
       </div>

    </div>
}
export default MyFrends