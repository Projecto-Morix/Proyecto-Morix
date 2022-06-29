import {React, useState, useEffect} from 'react'
import axios from 'axios';
import {Server, ServerImg} from '../backend';
import {useParams} from 'react-router-dom';
import DetailsCSS from '../css/productdetail.module.css';
function Details(props){
    let {Id} = useParams();
    const [Productz, SetProductz] = useState([]);
    useEffect(() => {
       
      async function fetchData() {
        
    const req= await axios.get(Server+"/catalog/details/"+Id);
    SetProductz(req.data);

    return req.data;
      }
      fetchData();
    }, [Id]);

return(
  <div className={DetailsCSS.productDetails}>
    <>{Productz.map(Product=> (<div className={DetailsCSS.eventContainer} key={Product.ID_Evento}>
      <div className={DetailsCSS.img} style={{backgroundImage: 'url('+ServerImg+Product.Imagenes[0]+')'}}></div>
      <div className={DetailsCSS.text}>
        <div className={DetailsCSS.title}>{Product.Nombre}</div>
        <div className={DetailsCSS.line}></div>
        <div className={DetailsCSS.category}>{Product.Tipo}</div>
        <div className={DetailsCSS.desc}>{Product.Descripcion}</div>
        <div className={DetailsCSS.localizaciondatos}>
          <div className={DetailsCSS.localizacion}>
            <div className={DetailsCSS.titleLocalizacion}>Localización</div>
            <div className={DetailsCSS.textcontains}>República Dominicana</div>
            <div className={DetailsCSS.textcontains}>{Product.locacion}</div>
            <div className={DetailsCSS.textcontains}>{Product.locacion}</div>
          </div>
          <div className={DetailsCSS.datosgenerales}>
            <div className={DetailsCSS.titleDatos}>Datos Generales</div>
            <div className={DetailsCSS.textcontains}>Fecha:{Product.Fecha_Evento}</div>
            <div className={DetailsCSS.textcontains}>Edad Mínima: {Product.Edad_Min} años</div>
          </div>
        </div>
                  <button className={DetailsCSS.boton}>COMPRA BOLETAS</button>
        </div>
        </div>))}</>
    </div>
)
}

export default Details;