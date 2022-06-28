import React from 'react'
import {Link} from 'react-router-dom';
import UserCSS from './../css/user.module.css';

function User() {
  return (
    <div className={UserCSS.user}>
      <section className={UserCSS.settings}>
        <h3 className={UserCSS.sectionTitle}>Ajustes</h3>
        <Link to="/register-prov" className={UserCSS.button}>Convertirse en patrocinador</Link>
      </section>
      <section className={UserCSS.myEvents}>
        <h3 className={UserCSS.sectionTitle}>Mis eventos</h3>
        <Link to="/add-event" className={UserCSS.button}>Agregar Evento</Link>
      </section>
    </div>
  )
}

export default User