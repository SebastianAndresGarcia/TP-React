import React, { Component } from "react";
import Navigation from './Navigation';
import instrumentos from "../datos/instrumentos.json";
import Container from 'react-bootstrap/Container';
import Tarjeta from "./Tarjeta";
class Productos extends Component{
    constructor() {
        super();
        this.state = { //todos los componentes tienen un estado, le asigno los instrumentos del json, cuando yo llame a Home, la pantalla ya tendrá dentro de si el json
            instrumentos
        }
    }

    render() { //dibujo la pantalla haciendo referencia a state, recorro los elementos del json con map,
        //cada uno de esos elementos los llamo instrumento con su i, para cada uno de ellos return una tarjeta
        //hay que ponerle un "key" a cada tarjeta

        const instrumentos = this.state.instrumentos.map((instrumento, i) => { //lógica que se hace antes de mandar a la pantalla
            return (
                <Tarjeta key={instrumento.id} id={instrumento.id}
                    nombre={instrumento.instrumento}
                    marca={instrumento.marca}
                    modelo={instrumento.modelo}
                    imagen={instrumento.imagen}
                    precio={instrumento.precio}
                    costoenvio={instrumento.costoEnvio}
                    cantidadvendida={instrumento.cantidadVendida}
                    descripcion={instrumento.descripcion}
                ></Tarjeta>
            )
        })
        
        return ( //esto es lo que se manda a la pantalla
            <React.Fragment>
                <Navigation></Navigation>
                {/*<Pila></Pila>*/}
                <Container fluid="md">
                    {instrumentos} {/* contiene todas las tarjetas*/}
                </Container>
                
            </React.Fragment>
        );

    }
}
export default Productos;