import {Link, Navigate, Route, Routes} from "react-router-dom"
import NotFound from './views/NotFound'
import Characters from './views/Characters'
import OneCharacter from "./views/OneCharacter";
import Form from './components/Form';
import Planets from "./views/Planets";


function App() {
  return (
    <div >
      <header>
        <nav>
          &nbsp;<Link to='/'> Home </Link>  &nbsp;
          &nbsp;<Link to='/characters'> Characters </Link>
          &nbsp;<Link to='/planets'> Planets </Link>
        </nav><hr />
      </header>
      {/*<=== ROUTES ===>*/}
      <Routes>
        {/* <Route path='/' element={<Navigate to='/characters' replace/>}/> */}
        <Route path='/' element={<div> <Form /><br /><br /></div>}/>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/oneCharacter/:id' element={<OneCharacter/>}/>
        <Route path='/planets' element={<Planets/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
