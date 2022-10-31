import React, { useState } from 'react';





export const BoxGenInput = props => {
    const [submitted]=useState("True")
    return (
        <div className="App" >
            <h1>{props.box}</h1>
            <label htmlFor="color"></label>
            <input type="text" id="colorInputColor" />
            <input type="submit" />
        </div>
    );
}
