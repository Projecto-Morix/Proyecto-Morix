import { useState, useEffect, React } from 'react'
import { Server, ServerImg, Axios } from './../backend';
import { useNavigate } from 'react-router-dom';
import CatalogCSS from '../css/Catalog.module.css'
import { PropTypes } from 'prop-types';
function Catalog({ Id, Title }) {
  let navigate = useNavigate();
  const [Products, SetProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const site = Id===0? '/catalog/' : '/catalog/patron/' + Id;
      console.log(site);
      const req = await Axios.get(Server + site);
      SetProducts(req.data);
     // return req.data;
    }
    fetchData();
  }, [Id]);
  return (
    <div className={CatalogCSS.catalog}>
      <h2 className={CatalogCSS.catalogTitle}>{Title}</h2>
      <div className={CatalogCSS.catalogContainer}>
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

Catalog.propTypes = {
  Id: PropTypes.number,
  Title: PropTypes.string
}
//create default props
Catalog.defaultProps = {
  Id: 0,
  Title: 'Eventos'
}
export default Catalog;
//style="background-image: url(IMG/eventOpera.jpg)