import {useState,useEffect,React} from 'react'
import {axios} from 'axios';
import Catalog from './components/Catalog'
import {Server} from '../backend';
const [Products, SetProducts] = useState([]);
useEffect(async () => {
req=await axios.get(Server+"/")
})

const Home = () => {
  return (
    <div> 
 <main>
     <Catalog/>
  </main>
    </div>
  )
}

export default Home