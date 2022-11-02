import { useState } from "react";
import React  from "react";
import deleteItem from 

const Item=(props)=>{
    const [hasBeenClicked, setHasBeenClicked]=useState(false);
    const ItemChecked=(event)=>{
        hasBeenClicked? setHasBeenClicked(false):setHasBeenClicked(true);
        event.preventDefault();
    }
    return(
        <div>
            <li>
                {
                hasBeenClicked?<strike>{props.setItemInfo} <input type="checkbox"  onChange={ItemChecked}  checked={hasBeenClicked} /></strike>
                : <p>{props.setItemInfo} <input type="checkbox" onChange={ItemChecked} checked={hasBeenClicked} /></p>}
                {/* Delete Button */}
                <input type="submit" value="Delete" key2={props.key} onclick={deleteItem}/>
            </li>
            
        </div>
    );
}
export default Item;