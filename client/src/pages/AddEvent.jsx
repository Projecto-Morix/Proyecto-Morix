import React from 'react'
import AddEventCSS from './../css/addevent.module.css';

function AddEvent() {
  return (
    <div className={AddEventCSS.productDetails}>
        <div className={AddEventCSS.eventContainer}>
        <div className={AddEventCSS.imgContainer}>
            <input className={AddEventCSS.imgInput} type='file'></input>
        </div>
        <div className={AddEventCSS.text}>
            <input className={AddEventCSS.title} placeholder='Titulo del evento'></input>
            <div className={AddEventCSS.line}></div>
            <input className={AddEventCSS.category} placeholder='Categoria'></input>
            <input className={AddEventCSS.desc} placeholder='Descripcion'></input>
            <div className={AddEventCSS.localizaciondatos}>
            <div className={AddEventCSS.localizacion}>
                <div className={AddEventCSS.titleLocalizacion}>Localización</div>
                <input className={AddEventCSS.textcontains} placeholder='Locacion'></input>
            </div>
            <div className={AddEventCSS.datosgenerales}>
                <div className={AddEventCSS.titleDatos}>Datos Generales</div>
                <div className={AddEventCSS.textcontains}>Fecha: <input className={AddEventCSS.Fecha} placeholder='yyyy/mm/dd'></input></div>
                <div className={AddEventCSS.textcontains}>Edad Mínima: <input className={AddEventCSS.EdadMinima} placeholder='00'></input> años</div>
            </div>
            </div>
                <button className={AddEventCSS.boton}>GUARDAR EVENTO</button>
            </div>
        </div>
    </div>
  )
}

export default AddEvent