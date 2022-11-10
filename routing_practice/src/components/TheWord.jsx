import React from "react";
import { useParams } from "react-router-dom";


const Four =(props)=>{
    const { word } = useParams();
    return(
        <div>
            <h3>The Word is {word} </h3>
        </div>
    )
}
export default Four