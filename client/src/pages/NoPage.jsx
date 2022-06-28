import React from 'react'
import ErrorCSS from './../css/404.module.css';

function NoPage() { //404 Error
  return (
    <div className={ErrorCSS.e404}>
      <h1 className={ErrorCSS.error404Title}>404</h1>
      <h5 className={ErrorCSS.error404Subtitle}>Página no encontrada</h5>
    </div>
    
  )
}

export default NoPage