import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/normalize.css';
import Login from './pages/Login';
import CatalogoE from './pages/CatalogoE';
import NoPage from './pages/NoPage';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import SFooter from './pages/components/SFooter';
const root = ReactDOM.createRoot(document.getElementById('root'));
const RenderApp= ()=>{
root.render(
  <React.StrictMode>
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <br/>
      </nav>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/" element={<CatalogoE/>} />
        <Route path="*" element={<NoPage/>}/>
      </Routes>
      <SFooter/>
    </Router>
  </React.StrictMode>
);
}
RenderApp();

