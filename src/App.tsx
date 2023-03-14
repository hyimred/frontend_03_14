import React from 'react';
import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main';
import About from './components/pages/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Contact from './components/pages/Contact';
import Thanks from './components/pages/Thanks';

class App extends React.Component {
  render() {
    return <div>
        <header>
          <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>Főoldal</Link>
              </li>
              <li className='nav-item'>
                <Link to='/bemutatkozas' className='nav-link'>Bemutatkozás</Link>
              </li>
              <li className='nav-item'>
                <Link to='/kapcsolat' className='nav-link'>Kapcsolat</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/bemutatkozas' element={<About/>} />
            <Route path='/kapcsolat' element={<Contact/>} />
            <Route path='/*' element={<Navigate to='/'/>}/>
            <Route path='/koszonjuk' element={<Thanks/>}/>
          </Routes>
        </main>
        <footer>
          <h2>Készítette: Csák Patrik</h2>
        </footer>
    </div>
  }
}

export default App;
