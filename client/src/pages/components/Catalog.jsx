import React from 'react'

function Catalog({Title, Id, img}) {
  return (
    <div class="catalog-container">
      <>
        <div class="card" id={Id}>
            <div className="img" style={"background-image: url("+img+")"}></div>
            <div className="text">{Title}</div>
            <button class="learnmore">SABER MAS...</button>
        </div>
        </>
    </div>
  )
}

export default Catalog;
//style="background-image: url(IMG/eventOpera.jpg)