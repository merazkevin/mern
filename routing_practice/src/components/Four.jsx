import React from "react";
import { useParams } from "react-router-dom";


const Four =(props)=>{
    const { input } = useParams();
    return(
        <div>
            {isNaN(input)?<h3>The Word is: {input}</h3>:<h3> The Number is: {input}</h3>}
        </div>
    )
}
export default Four