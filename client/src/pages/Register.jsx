<<<<<<< HEAD
import './../css/register.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
=======
import RegisterCSS from './../css/register.module.css';
import { Axios } from '../backend';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
>>>>>>> refs/remotes/origin/main
function Register() {
  const [Nombre, SetNombre] = useState('');
  const [Apellido, SetApellido] = useState('');
  const [Email, SetEmail] = useState('');
  const [Pass, SetPass] = useState(''); 
  const [Telefono, SetTelefono] = useState('');
  const [Birth, SetBirth] = useState('');
  return (
<<<<<<< HEAD
    <main className='register-main-container'>
      <div className="register-panel">
        <div className="register-header">
          <div className="header-title">Crea tu cuenta</div>
          <div className="header-subtitle">Y comienza la experiencia</div>
      </div>
      <form action="" method="">
        <label htmlFor="nombre" onChange={(e)=>{SetNombre(e.target.value); console.log(Nombre);}} value={Nombre}>Nombre</label>
        <input type="text" id="name"/>
        <label htmlFor="apellidos" onChange={(e)=>{SetApellido(e.target.value); console.log(Apellido);}}>Apellidos</label>
        <input type="text" id="name"/>
        <label htmlFor="email" onChange={(e)=>{SetEmail(e.target.value)}}>Email</label>
        <input type="text" id="contraseña"/>
        <label htmlFor="password">Contraseña</label>
        <input type="password" onChange={(e)=>{SetPass(e.target.value)}} value={Pass}/>
        <label htmlFor="telefono">Telefono</label>
        <input type="text" id="telefono" onChange={(e)=>{SetTelefono(e.target.value)}}
        value={Telefono}/>
        <label htmlFor="birth">Fecha de Nacimiento</label>
        <input type="text" id="birth" onChange={(e)=>{SetBirth(e.target.value)}} value={Birth}/>
        <input type="submit" onClick={()=>{
          //axios.post()
        }} value="Registrarse"/>
    </form>
    </div>
  </main>
=======
    <div className="main-container">
      <main>
        <div className={RegisterCSS.register}>
          <div className={RegisterCSS.registerPanel}>
            <div className={RegisterCSS.registerHeader}>
              <div className={RegisterCSS.headerTitle}>Crea tu cuenta</div>
              <div className={RegisterCSS.headerSubtitle}>Y comienza la experiencia</div>
            </div>
            <form action=''>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="name" onChange={(e) => { SetNombre(e.target.value); }} value={Nombre} />
              <label htmlFor="apellidos" >Apellidos</label>
              <input type="text" id="apellido" onChange={(e) => { SetApellido(e.target.value); }} value={Apellido} />
              <label htmlFor="email" >Email</label>
              <input type="email" id="email" onChange={(e) => { SetEmail(e.target.value); }} value={Email} />
              <label htmlFor="password">Contraseña</label>
              <input type="password" onChange={(e) => { SetPass(e.target.value) }} value={Pass} />
              <label htmlFor="telefono">Telefono</label>
              <input type="text" id="telefono" onChange={(e) => { SetTelefono(e.target.value) }} value={Telefono} />
              <label htmlFor="birth">Fecha de Nacimiento</label>
              <input type="date" id="birth" onChange={(e) => {
                console.log(e.target.value); SetBirth(new Date(e.target.value));
              }} value={Birth.toISOString().substring(0, 10)
              } />

              <input type="submit" onClick={(event) => {
                event.preventDefault()
                Register();
              }} value='Register' />
              <p style={Guide.style}>{Guide.msg}</p>
            </form>
          </div>
        </div>
      </main>
    </div>
>>>>>>> refs/remotes/origin/main
  );
}
export default Register;
