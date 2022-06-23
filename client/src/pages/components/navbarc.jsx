import React from 'react'
import {Link} from 'react-router-dom';
const navbarc = () => {
  return (
    <nav>
    <Link to="/" className="nav-logo">Morix</Link>
    <div className='links'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
      </ul>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/SignIn">Register</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default navbarc