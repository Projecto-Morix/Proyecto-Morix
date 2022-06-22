import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/normalize.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Catalog from './pages/Catalog'
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
        <ul>
          <li><Link to="/catalog">Catalogo</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Catalog" element={<Catalog/>} />
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

