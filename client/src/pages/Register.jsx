import './../css/register.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
function Register() {
  const [Nombre, SetNombre] = useState('');
  const [Apellido, SetApellido] = useState('');
  const [Email, SetEmail] = useState('');
  const [Pass, SetPass] = useState(''); 
  const [Telefono, SetTelefono] = useState('');
  const [Birth, SetBirth] = useState('');
  return (
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
  );
}
export default Register;
