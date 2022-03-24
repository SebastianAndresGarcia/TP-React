import React, { Component } from "react";
import Navigation from './Navigation';
import instrumentos from "../datos/instrumentos.json";
import Container from 'react-bootstrap/Container';
import Tarjeta from "./Tarjeta";
import Pila from "./Pila";

class Home extends Component {


    render() { //dibujo la pantalla haciendo referencia a state, recorro los elementos del json con map,
        //cada uno de esos elementos los llamo instrumento con su i, para cada uno de ellos return una tarjeta
        //hay que ponerle un "key" a cada tarjeta


        return ( //esto es lo que se manda a la pantalla
            <>
                <Navigation></Navigation>
                {/*<Pila></Pila>*/}
                <body>
                <div className="col-md-8">
                    <h3>Quienes somos</h3>
                    <p text-align="justify">Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia.
                        Tenemos el conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</p>
                    <h3><a href="/Productos">Ver nuestros productos</a></h3><br></br>
                    <h3>Donde Estamos</h3>
                    <iframe
                        title="mapa"
                        className="mt-3 d-block mx-auto"
                        width="70%"
                        height="300px"
                        src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=es&amp;q=Av.%20Las%20Heras%20y%20Av.%20San%20Martin,%20Ciudad%20de%20Mendoza+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                    <br></br>

                </div>
                
                </body>
                </>
            
        );

    }
}
export default Home;
