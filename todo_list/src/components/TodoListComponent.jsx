import { useState } from "react";

const TodoList = (props)=>{
    const [itemInfo, setItemInfo]=useState("")
    const handleSubmit=(event)=>{
        event.preventDefault();
        props.createItem(itemInfo)
        setItemInfo("");
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="item">Item: </label>
                <input type="text"  onChange={(event)=>setItemInfo(event.target.value)} value={itemInfo}/><br />
                <input type="submit"  value="Add" />
            </form>
        </div>
    );
}
export default TodoList;