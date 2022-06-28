import React from 'react'
<<<<<<< HEAD
//import './../css/404.css';
//import Navbarc from './components/navbarc';
//import SFooter from './components/SFooter';
=======
import ErrorCSS from './../css/404.module.css';

>>>>>>> refs/remotes/origin/main
function NoPage() { //404 Error
  return (
    <div className={ErrorCSS.e404}>
      <h1 className={ErrorCSS.error404Title}>404</h1>
      <h5 className={ErrorCSS.error404Subtitle}>Página no encontrada</h5>
    </div>
    
  )
}

export default NoPage