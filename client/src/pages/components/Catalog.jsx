import React from 'react'

function Catalog({Title, Id, img}) {
  console.log(Id);
  return (
    <div className="catalog-container" key={Id}>
      <>
        <div className="card" >
            <div className="img"></div>
            <div className="text">{Title}</div>
            <button className="learnmore">SABER MAS...</button>
        </div>
        </>
    </div>
  )
}

export default Catalog;
//style="background-image: url(IMG/eventOpera.jpg)