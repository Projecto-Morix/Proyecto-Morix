import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/normalize.css';
import './css/Catalog.css';
import './css/login.css';
import Login from './pages/Login';
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
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
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

