import { useState } from "react";
import React  from "react";



const Item=(props)=>{
    const [hasBeenClicked, setHasBeenClicked]=useState(false);
    const ItemChecked=(event)=>{
        hasBeenClicked? setHasBeenClicked(false):setHasBeenClicked(true);
        event.preventDefault();
    }
    return(
        <div>
                {
                hasBeenClicked?<strike>{props.setItemInfo} <input type="checkbox"  onChange={ItemChecked}  checked={hasBeenClicked} /></strike>
                : <p>{props.setItemInfo} <input type="checkbox" onChange={ItemChecked} checked={hasBeenClicked} /></p>}
                {/* Delete Button */}
                <input type="submit" onClick={(event)=>{props.deleteItem(props.index);}} value="Delete"/>
        </div>
    );
}
export default Item;