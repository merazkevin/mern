import './App.css';
import {PersonCard} from "./components/Prop_it_up.js"

function App() {
  return (
    <>
    {/* <=== Jane ===> */}
    <PersonCard first_name="Jane" last_name="Doe" age={45} hair_color="Black" />

    {/* <=== John ===> */}
    <PersonCard first_name="John" last_name="Smith" age={88} hair_color="Brown" />

    {/* <=== Jane ===> */}
    <PersonCard first_name="Millard" last_name="Fillmore" age={50} hair_color="Brown" />
    
    {/* <=== Maria ===> */}
    <PersonCard first_name="Maria" last_name="Smith" age={62} hair_color="Brown" />
    </>
    
  );
}

export default App;
