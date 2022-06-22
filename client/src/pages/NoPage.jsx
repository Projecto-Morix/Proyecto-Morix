import React from 'react'
import './../css/404.css';

function NoPage() { //404 Error
  return (
    <main>
      <h1 className='error-404-title'>404</h1>
      <h5 className='error-404-subtitle'>Página no encontrada</h5>
    </main>
  )
}

export default NoPage