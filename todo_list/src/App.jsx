import { useState } from 'react';
import './App.css';
import TodoList from "./components/TodoListComponent"
import Item from "./components/ItemComponent.jsx"

function App() {
  const [items, setItems]=useState([])
  const createItem=(setItemInfo)=>{
    setItems([...items, {setItemInfo}])
  }
  const deleteItem= (props, )=>{
        props.keys !== props.ke
        
    }
  return (
    <center>
      <h1>Add Item to  List </h1>
      <TodoList createItem={createItem}/>
      <hr />
      <div  id="App-border">
      <h3>To Do List</h3>
        {items.map((one_item, index)=>< Item key={index} setItemInfo={one_item.setItemInfo}/>)}
      </div>
    </center>
  );
}

export default App;
