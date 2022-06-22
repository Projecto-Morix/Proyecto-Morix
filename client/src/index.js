import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/normalize.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import SFooter from './pages/components/SFooter';
const root = ReactDOM.createRoot(document.getElementById('root'));

const RenderApp= ()=>{
root.render(
  <React.StrictMode>
    <Router>
      <nav>
        <Link to="/" className="nav-logo">Morix</Link>
        <div className='links'>
          <ul>
            <li><Link to="/login">Route1</Link></li>
            <li><Link to="/login">Route2</Link></li>
            <li><Link to="/login">Route3</Link></li>
            <li><Link to="/login">Route4</Link></li>
          </ul>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NoPage/>}/>
      </Routes>
      <SFooter/>
    </Router>
  </React.StrictMode>
);
}
RenderApp();

