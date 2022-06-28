import React from 'react'
import {Link} from 'react-router-dom';
import {useUserContext} from './UserContext';

const Navbarc = () => {
    const [User, SetUser] = useUserContext();
  return (
    <nav>
    <Link to="/" className="nav-logo">Morix</Link>
    <div className='links'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
      </ul>
      <ul>
        <>{ User.auth? <>
        <li><Link to="/user">Bienvenido {User.UserData.Nombre+'!'}</Link></li>
        <li><Link to='/logout'>Log Out</Link> </li>
        </>
         : <>
         <li><Link to="/login">Log-in</Link></li>
         <li><Link to="/SignIn">Register</Link></li>
         </>
         } </>
      </ul>
    </div>
  </nav>
  )
}
//SetUser({ auth: false, token: null,UserData:{}})
export default Navbarc