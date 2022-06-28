import { useState, useEffect, React } from 'react'
import { Server, ServerImg, Axios } from './../backend';
import { useNavigate } from 'react-router-dom';
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
    <div className="catalogContainer">
      <h1>Catalog</h1>
      <>{console.log(Products)}</>
      <>{
        Products.map(Product => (
          <div className="card" key={Product.ID_Evento}>
            <div className="img" style={{ backgroundImage: 'url(' + ServerImg + Product.Imagenes[0] + ')' }}></div>
            <div className="text">{Product.Nombre}</div>
            <button className="learnmore" onClick={() => { navigate('/catalog/' + Product.ID_Evento) }}>SABER MAS...</button>
          </div>
        ))} </>
    </div>
  )
}

export default Catalog;
//style="background-image: url(IMG/eventOpera.jpg)