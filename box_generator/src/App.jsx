import './App.css';
import { BoxGenInput } from './components/BoxGenInput';
import {useState} from 'react'
import BoxComponent  from './components/BoxComponent';

function App() {
  const [boxes, setBoxes]=useState([])
// console.log(boxes)only after useState
  const createBox = (color,width,height)=>{
    setBoxes([...boxes,{color, width, height} ])

  }
  return (
    <div >
      <BoxGenInput createBox={createBox} />
      <hr />
      <div className="App-header" id="App-border">
        {
          boxes.map((one_box, index)=><BoxComponent key={index} color={one_box.color} width={one_box.width} height={one_box.height} className="App-border"/>)
        }
      </div>
    </div>
  );
}

export default App;
