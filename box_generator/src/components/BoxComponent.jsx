import React from "react";
import { useState } from "react";

export const CreateBoxComponent = (event)=>{
    const [setColor]=useState("")
    event.preventDefault();
    return(
        submitted? null:<div style={{ backgroundColor:{setColor},width: '100px', height: '100px'}}>Yaya</div>
    );
}
