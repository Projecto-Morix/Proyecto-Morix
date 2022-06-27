import {React, useState, useEffect} from 'react'
import axios from 'axios';
import {Server, ServerImg} from '../backend';
import {useParams} from 'react-router-dom';
import '../css/productdetail.css';
function Details(props){
    let {Id} = useParams();
    const [Productz, SetProductz] = useState([]);
    useEffect(() => {
       
      async function fetchData() {
        
    const req= await axios.get(Server+"/catalog/"+Id);
    SetProductz(req.data);

    return req.data;
      }
      fetchData();
    }, [Id]);

return(
<main>

<>{Productz.map(Product=> (<div className="event-container" key={Product.ID_Evento}>
   <div className="img" style={{backgroundImage: 'url('+ServerImg+Product.Imagenes[0]+')'}}></div>
   <div className="text">
     <div className="title">{Product.Nombre}</div>
     <div className="line"></div>
     <div className="category">{Product.Tipo}</div>
     <div className="desc">{Product.Descripcion}</div>
     <div className="localizaciondatos">
       <div className="localizacion">
         <div className="title-localizacion">Localización</div>
         <div className="textcontains">República Dominicana</div>
         <div className="textcontains">{Product.locacion}</div>
         <div className="textcontains">{Product.locacion}</div>
       </div>
       <div className="datosgenerales">
         <div className="title-datos">Datos Generales</div>
         <div className="textcontains">Fecha:{Product.Fecha_Evento}</div>
         <div className="textcontains">Edad Mínima: {Product.Edad_Min} años</div>
       </div>
     </div>
     </div>
    </div>))}</>

     <div className="centralizer">
       <button className="boton">COMPRA BOLETAS</button>
 </div>
</main>
)
}

export default Details;