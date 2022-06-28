import Navbarc from './Navbarc';
import SFooter from './SFooter';
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