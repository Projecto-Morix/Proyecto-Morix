import React from 'react'
import '../css/RegisterProv.css';
function RegisterProv  () {
  return (
    <main class="form-register">
    <h4>Formulario Registro</h4>
    
    <select id="Category" name="Categoria" class="controls">
      <option value="RealPerson">Persona Real</option>
      <option value="Enterprise">Empresa</option>
      </select><br/>
    <input class="controls" type="text" name="Empresa" id="Empresa" placeholder="Ingrese de Empresa"/>
    <input class="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña"/>
    <input id="cedula"type="number" placeholder="000-00000000-0" class="controls"/>
    <input type="text" placeholder="Ubicacion" class="controls"/>
    <input type="checkbox" name="Check" value="Si" placeholder="si"/>
    <label for="Check" class="controls">Si</label>
    <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
    <input class="botons" type="submit" value="Registrar"/>
  </main>

  )
}

export default RegisterProv