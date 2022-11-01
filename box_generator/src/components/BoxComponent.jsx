import React from "react";



const BoxComponent = (props)=>{

    return(
        <div  style={{ backgroundColor:props.color,width: props.width+"px", height:props.height+"px" }}>{props.color}</div>
    );
}
export default BoxComponent