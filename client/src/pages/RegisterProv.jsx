import React from 'react'
import styles from '../css/ProvReg.module.css';
function RegisterProv  () {
  return (
    <div className={styles.registerProv}>
      <div class={styles.formRegister}>
        <h4>Formulario Registro</h4>
        
        <select id="Category" name="Categoria" class={styles.controls}>
          <option value="RealPerson">Individuo</option>
          <option value="Enterprise">Empresa</option>
          </select><br/>
        <input class={styles.controls} type="text" name="Empresa" id="Empresa" placeholder="Ingrese de Empresa"/>
        <input class={styles.controls} type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña"/>
        <input id="cedula"type="number" placeholder="000-00000000-0" class={styles.controls}/>
        <input type="text" placeholder="Ubicacion" class="controls"/>
        <input type="checkbox" name="Check" value="Si" placeholder="si"/>
        <label for="Check" class="controls">Si</label>
        <p>Estoy de acuerdo con Terminos y Condiciones</p>
        <input class={styles.botons} type="submit" value="Registrar"/>
      </div>
    </div>
  )
}

export default RegisterProv