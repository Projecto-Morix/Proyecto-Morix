import './../css/register.css';
import { Axios } from '../backend';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [Nombre, SetNombre] = useState(() => { return '' });
  const [Apellido, SetApellido] = useState(() => { return '' });
  const [Email, SetEmail] = useState(() => { return '' });
  const [Pass, SetPass] = useState(() => { return '' });
  const [Telefono, SetTelefono] = useState(() => { return '' });
  const [Birth, SetBirth] = useState(() => { return new Date('1990-01-01') });
  const [Guide, SetGuide] = useState(() => { return { status: false, msg: 'You must be 18 years old to register', color: 'red' } });
  const navigate = useNavigate();
  const Register = async () => {
    if (Nombre === '' || Apellido === '' || Email === '' || Pass === '' || Telefono === '') {
      SetGuide({ status: false, msg: 'Please fill all the fields', style: { color: 'red' } });
      return;
    }
    const EmailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if (!EmailRegex.test(Email)) {
      SetGuide({ status: false, msg: 'Please enter a valid email', style: { color: 'red' } });
      return;
    }
    const PaswRegex = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm;
    if (!PaswRegex.test(Pass)) {
      SetGuide({ status: false, msg: 'Please enter a valid password! It should contain 1 upper, 1 lower case letter and 1 number.', style: { color: 'red' } });
      return;
    }
    // check if birth is older than 18 years
    if ((new Date(Date.now()).getFullYear() - Birth.getFullYear()) < 18) {
      SetGuide({ status: false, msg: 'You must be 18 years old to register', style: { color: 'red' } });
      return;
    }
    SetGuide({ status: true, msg: 'Registering...', style: { color: 'black' } });
    try {
      const resp = await Axios.post('/register', { nombre: Nombre, apellido: Apellido, email: Email.toLowerCase(), password: Pass, telefono: Telefono, fecha: Birth });
      if (resp.status === 200) {
        console.log('object');
        SetGuide({ status: true, msg: 'Register success', style: { color: 'green' } });
        navigate('/login');
      } else
        console.log('papa');
    } catch (err) {
      console.log('anja');
      SetGuide({ status: false, msg: err.response.data.err, style: { color: 'red' } });
    }
  }
  return (
    <main>
      <div className="register-panel">
        <div className="register-header">
          <div className="header-title">Crea tu cuenta</div>
          <div className="header-subtitle">Y comienza la experiencia</div>
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
    </main>
  );
}
export default Register;
