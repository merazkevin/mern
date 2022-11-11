import {Link, Navigate, Route, Routes} from "react-router-dom"
import NotFound from './views/NotFound'
import Characters from './views/Characters'
import Form from './components/Form';
import Planets from "./views/Planets";


function App() {
  return (
    <div >
      <header>
        <nav>
          &nbsp;<Link to='/'> Home </Link>  &nbsp;
        </nav><hr />
      </header>
      {/*<=== ROUTES ===>*/}
      <Routes>
        <Route path='/' element={<div> <Form /><br /><br /></div>}/>
        <Route path='/people/:inputVal' element={<Characters/>}/>
        <Route path='/planets/:inputVal' element={<Planets/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
