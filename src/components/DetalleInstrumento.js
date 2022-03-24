import React, { Component } from "react";
import Navigation from './Navigation';
import instrumentos from "../datos/instrumentos.json";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";

class DetalleInstrumento extends Component {
    constructor() {
        super();
        this.state = { //todos los componentes tienen un estado, le asigno los instrumentos del json, cuando yo llame a Home, la pantalla ya tendrá dentro de si el json
            instrumentos
        }
    }

    render() {
        const parametroId = this.props.match.params.id;
        const instrumento = instrumentos.filter(inst => inst.id===parametroId);
        console.log("recupero id de instrumento " + parametroId);
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <br></br><Container fluid="md">
                    <Row>
                        <Col><Row><img width="75" height="300" src={require(`../assets/images/${instrumento[0].imagen}`)} /></Row>
                            <Row>Descripción <br></br>{instrumento[0].descripcion}</Row>
                        </Col>
                        <Col>{instrumento[0].cantidadVendida} vendidos<br></br>
                            {instrumento[0].instrumento}<br></br>
                            ${instrumento[0].precio} <br></br>
                            {instrumento[0].marca}<br></br>
                            {instrumento[0].modelo}<br></br>
                            Costo Envío: {(instrumento[0].costoEnvio === 'G') ? "Envío Gratis" : ("$" + instrumento[0].costoEnvio)}<br></br>
                            <Button>Agregar al carrito</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
export default DetalleInstrumento;
