import { useState } from 'react';
import './App.css';
import TodoList from "./components/TodoListComponent"
import Item from "./components/ItemComponent.jsx"

function App() {
  const [items, setItems]=useState([])
  const createItem=(setItemInfo)=>{
    setItems([...items, {setItemInfo}])
  }
  const deleteItem= (delIndex)=>{
    debugger
    const filterItems=items.filter((one_item,index)=>{
      return index !== delIndex;
    });
    setItems(filterItems);
  }
  return (
    <center>
      <h1>Add Item to  List </h1>
      <TodoList createItem={createItem} />
      <hr />
      <div  id="App-border">
      <h3>To Do List</h3>
        {items.map((one_item, index)=>{
        return < Item key={index} index={index} setItemInfo={one_item.setItemInfo} deleteItem={deleteItem}/>})}
      </div>
    </center>
  );
}

export default App;
