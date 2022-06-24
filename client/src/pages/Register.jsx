//import './../css/register.css';
import {useState, useEffect} from 'react'
function Register() {
  const [Nombre, SetNombre] = useState('');
  const [Nombre, SetNombre] = useState('');
  useEffect(()=>{

  },[])
  return (
    <main>
      <div class="register-panel">
        <div class="register-header">
          <div class="header-title">Crea tu cuenta</div>
          <div class="header-subtitle">Y comienza la experiencia</div>
      </div>
      <form action="" method="">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="name"/>
        <label htmlFor="apellidos">Apellidos</label>
        <input type="text" id="name"/>
        <label htmlfor="email">Email</label>
        <input type="text" id="contraseña"/>
        <label htmlfor="password">Contraseña</label>
        <input type="password"/>
        <label htmlfor="telefono">Telefono</label>
        <input type="text" id="telefono"/>
        <label htmlfor="birth">Fecha de Nacimiento</label>
        <input type="text" id="birth"/>
        <input type="submit" onClick={()=>{
          axios.post()
        }} value="Registrarse"/>
    </form>
    </div>
  </main>
  );
}
export default Register;
