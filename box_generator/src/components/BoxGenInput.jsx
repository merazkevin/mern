import React, { useState } from 'react';


//figure out all the components (lifting state)



export const BoxGenInput = props => {
    const [color,setColor]=useState([])
    const [width,setWidth]=useState([])
    const [height,setHeight]=useState([])
    const handleSubmit=(event)=>{
        event.preventDefault();
        props.createBox(color, width, height)
        setColor("");
        setWidth(0);
        setHeight(0);

    }
    return (
        <form className="App" onSubmit={handleSubmit} >
            <h1>Box Gen</h1>
            <label htmlFor="color"> Color: </label>
            <input type="text" id="colorInputColor"  onChange={(event)=>setColor(event.target.value)} value={color}/> <br />
            <label htmlFor="width">Width: </label>
            <input type="number" id="colorInputColor"  onChange={(event)=>setWidth(event.target.value)} value={width}/> <br />
            <label htmlFor="width">Height: </label>
            <input type="number" id="colorInputColor"  onChange={(event)=>setHeight(event.target.value)} value={height}/> <br />
            <input type="submit" value="CreateBox"/>
        </form>
    );
}
