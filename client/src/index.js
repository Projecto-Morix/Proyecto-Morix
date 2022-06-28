import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './components/Home';
import NoPage from './pages/NoPage';
import Details from './pages/Details';
import Catalog from './components/Catalog';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import IndexP from './pages/Index';
import User from './pages/User.jsx';
import RegisterProv from './pages/RegisterProv.jsx'
import AddEvent from './pages/AddEvent.jsx'
import { UserProvider } from './components/UserContext';
import './css/normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const RenderApp= ()=>{
root.render(
  <React.StrictMode>
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/SignIn" element={<Register/>} />
        <Route path="/" element={<IndexP/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/catalog" element={<Home Comp={Catalog}/>} />
        <Route path="/catalog/:Id" element={<Home Comp={Details}/>} />
        <Route path="*" element={<Home Comp={NoPage}/>}/>
        <Route path="/user" element={<Home Comp={User}/>} />
        <Route path="/register-prov" element={<Home Comp={RegisterProv} />} />
        <Route path='/add-event' element={<Home Comp={AddEvent} />} />
      </Routes>
    </Router>
    </UserProvider>
  </React.StrictMode>
);
}
RenderApp();

