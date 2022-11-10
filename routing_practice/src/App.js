import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Route, Routes as Switch
} from 'react-router-dom';
import Index from './components/Index.jsx';
import Four from './components/Four';


function App() {
    return (
      <Router>
        <div className="App-header">
          <Switch >
            <Route path='/' element={<Index name="kevin" />} />
            <Route path='/:input' element={<Four />} />
          </Switch>
        </div>
      </Router>
    );
  }

  export default App;
