import { useState, useEffect, React } from 'react'
import { Server, ServerImg, Axios } from './../backend';
import { useNavigate } from 'react-router-dom';
import CatalogCSS from '../css/Catalog.module.css'
function Catalog({ Id }) {
  let navigate = useNavigate();
  const [Products, SetProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await Axios.get(Server + "/catalog");
      SetProducts(req.data);
      return req.data;
    }
    fetchData();
  }, []);
  return (
    <div className={CatalogCSS.catalog}>
      <h2 className={CatalogCSS.catalogTitle}>Eventos</h2>
      <div className={CatalogCSS.catalogContainer}>
        <>{console.log(Products)}</>
        <>{
          Products.map(Product => (
            <div className={CatalogCSS.card} key={Product.ID_Evento}>
              <div className={CatalogCSS.img} style={{ backgroundImage: 'url(' + ServerImg + Product.Imagenes[0] + ')' }}></div>
              <div className={CatalogCSS.cardContent}>
                <div className={CatalogCSS.text}>{Product.Nombre}</div>
                <button className={CatalogCSS.learnmore} onClick={() => { navigate('/catalog/' + Product.ID_Evento) }}>DETALLES</button>
              </div>
            </div>
          ))} </>
      </div>
    </div>
  )
}

export default Catalog;
//style="background-image: url(IMG/eventOpera.jpg)