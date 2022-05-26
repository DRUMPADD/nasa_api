import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Epic from './pages/Epic';
import Principal from './pages/Principal';
import NasaPlanets from './pages/NasaPlanets';
import Comets from './pages/Comets';
import Missions from './pages/Missions';
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <ul>
            <li>
              <Link to='/'>Principal</Link>
            </li>
            <li>
              <Link to='/epic'>EPIC</Link>
            </li>
            <li>
              <Link to='/comets'>Comets</Link>
            </li>
            <li>
              <Link to='/planets'>Nasa info</Link>
            </li>
            <li>
              <Link to='/missions'>Missions</Link>
            </li>
          </ul>
        </header>
      </div>
      <Routes>
        <Route path='/' exact element={<Principal />}>Principal</Route>
        <Route path='/epic' element={<Epic />}>EPIC</Route>
        <Route path='/comets' element={<Comets />}>Comets</Route>
        <Route path='/planets' element={<NasaPlanets />}>Nasa info</Route>
        <Route path='/missions' element={<Missions />}>Missions</Route>
      </Routes>
    </Router>
  );
}

export default App;
