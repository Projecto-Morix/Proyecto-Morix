//import '../css/Catalog.css';
import Navbarc from './components/navbarc';
import SFooter from './components/SFooter';
const Home = ({Comp}) => {
 
return (
    <div className='main-container'> 
  <Navbarc/>
 <main>
     <Comp/>
  </main>
  <SFooter/>
    </div>
  )
}

export default Home