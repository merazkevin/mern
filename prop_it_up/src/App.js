import './App.css';
// import {PersonCard} from "./components/PersonCardComponent.jsx"
// import FunctionalComponent from "./components/FunctionalComponent.jsx"
import UserInfoCard from "./components/UserInfoCard.jsx"

function App() {
  const UserInfo=[
    /* <=== Jane ===> */
    {
    id:1,
    first_name:"Jane",
    last_name:"Doe",
    age: 45
  },

    /* <=== John ===> */
    {
    id:2,
    first_name:"Jonhn",
    last_name:"Smith",
    age: 45
  },

  /* <=== Jane ===> */
  {
    id:3,
    first_name:"Millard",
    last_name:"Filmore",
    age: 45
  },
  
  //* <=== Maria ===> *
  {
    id:4,
    first_name:"Maria",
    last_name:"Smith",
    age: 45
  }
  ]
  return (
    <>
    
    {
      UserInfo.map((oneInfoCard)=>{
        return <UserInfoCard key={oneInfoCard.id} oneInfoCard={oneInfoCard} />
      })
    }
    </>
    
  );
}
export default App;
