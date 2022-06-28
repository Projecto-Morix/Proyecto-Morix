import React from 'react'
import AddEventCSS from './../css/addevent.module.css';

function AddEvent() {
  return (
    <div className={AddEventCSS.productDetails}>
        <div className={AddEventCSS.eventContainer}>
        <input className={AddEventCSS.imgInput}></input>
        <div className={AddEventCSS.text}>
            <input className={AddEventCSS.title}></input>
            <div className={AddEventCSS.line}></div>
            <input className={AddEventCSS.category}></input>
            <input className={AddEventCSS.desc}></input>
            <div className={AddEventCSS.localizaciondatos}>
            <div className={AddEventCSS.localizacion}>
                <div className={AddEventCSS.titleLocalizacion}>Localización</div>
                <div className={AddEventCSS.textcontains}>República Dominicana</div>
                <input className={AddEventCSS.textcontains}></input>
                <input className={AddEventCSS.textcontains}></input>
            </div>
            <div className={AddEventCSS.datosgenerales}>
                <div className={AddEventCSS.titleDatos}>Datos Generales</div>
                <div className={AddEventCSS.textcontains}>Fecha:</div>
                <div className={AddEventCSS.textcontains}>Edad Mínima:  años</div>
            </div>
            </div>
                <button className={AddEventCSS.boton}>GUARDAR EVENTO</button>
            </div>
        </div>
    </div>
  )
}

export default AddEvent