<<<<<<< HEAD:client/src/pages/Home.jsx
//import '../css/Catalog.css';
import Navbarc from './components/navbarc';
import SFooter from './components/SFooter';
=======
import Navbarc from './navbarc';
import SFooter from './SFooter';
>>>>>>> refs/remotes/origin/main:client/src/components/Home.jsx
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