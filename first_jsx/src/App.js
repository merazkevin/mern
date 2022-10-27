import './App.css';

function App() {
  const appJsx =(
    <div class="div">
      <h1>Hello Dojo</h1>
      <ul>
        <h4>Things I need to do:</h4>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>
    </div>
  )
  console.log("appJsx: ", appJsx)
  return appJsx;
}

export default App;
