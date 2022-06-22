import React from 'react'

function Catalog({Img, Name }) {
  return (
    <div class="catalog-container">
        <div class="card" id='1'>
            <div className="img"></div>
            <div className="text">Opera de San Critobal</div>
            
            <button class="learnmore">SABER MAS...</button>
        </div>
    
    </div>
  )
}

export default Catalog
//style="background-image: url(IMG/eventOpera.jpg)