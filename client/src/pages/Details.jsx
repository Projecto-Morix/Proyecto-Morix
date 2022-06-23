import React from 'react'

function detais(props){

    return(
        <main>
            <div class="event-container">
                <div class="img" style="background-image: url(IMG/eventOpera.jpg)"></div>
                <div class="text">
                    <div class="title">Opera en San Critobal</div>
                    <div class="line"></div>
                    <div class="category">Musica</div>
                    <div class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, consequuntur consequatur. Consequatur iste nesciunt sit alias obcaecati? Nostrum, doloremque tempore. Ipsum, explicabo. Ipsa expedita esse consectetur quod. Asperiores, sapiente animi</div>
                    <div class="localizaciondatos">
                        <div class="localizacion">
                            <div class="title-localizacion">Localización</div>
                            <div class="textcontains">República Dominicana</div>
                            <div class="textcontains">Santo Domingo</div>
                            <div class="textcontains">Calle #6, Ens. Isabelita</div>
                        </div>
                        <div class="datosgenerales">
                            <div class="title-datos">Datos Generales</div>
                            <div class="textcontains">Fecha: 10/10/2022</div>
                            <div class="textcontains">Edad Mínima: 16 años</div>
                        </div>
                    </div>
                    <div class="centralizer">
                        <button class="boton">COMPRA BOLETAS</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default details