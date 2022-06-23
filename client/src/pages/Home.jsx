import {useState,useEffect,React} from 'react'
import axios from 'axios';
import Catalog from './components/Catalog'
import Server from '../backend';


const Home = () => {
  const [Products, SetProducts] = useState([]);
useEffect(() => {
  async function fetchData() {
const req= await axios.get(Server+"/catalog")//.catch(err=>console.log(err));
SetProducts(req.data);
return req.data;
  }
  fetchData();
}, []);

return (
    <div> 
 <main>
  <>  {Products.map(product => (
     <Catalog Id={product.Id_Evento} Title={product.Nombre}/>
  ))}</>
  </main>
    </div>
  )
}

export default Home