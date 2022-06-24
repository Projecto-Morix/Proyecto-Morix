import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Details from './pages/Details';
import Catalog from './pages/components/Catalog';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import IndexP from './pages/Index';
// css
//if ()
//import './css/normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const RenderApp= ()=>{
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/SignIn" element={<Register/>} />
        <Route path="/" element={<IndexP/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/catalog" element={<Home Comp={Catalog}/>} />
        <Route path="/catalog/:Id" element={<Home Comp={Details}/>} />
        <Route path="*" element={<Home Comp={NoPage}/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
}
RenderApp();

