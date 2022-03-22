import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";

class Tarjeta extends Component {

    render() {
        return (
            <React.Fragment>
                <Container className="d-flex justify-content-center mt-8">
                    <Card style={{ width: '40rem' }} className="margenesTarjeta">
                        <Row>
                            <Col>
                               <Button href={`/detalleinstrumento/${this.props.id}`}> <Card.Img variant="top" className="maxAltoImg" src={
                                    require(`../assets/images/${this.props.imagen}`)
                                }
                                /></Button>
                            </Col>
                            <Col className="md-12">
                                <Card.Body>
                                    <Card.Title>
                                        {this.props.nombre} {/**con el objeto props recupero lo que 
                                 * le pasé desde el home. Los props son propiedades que los componentes padres pasan a los hijos */}
                                    </Card.Title>
                                    <Card.Text>
                                        ${this.props.precio}<br>
                                        </br>
                                        Costo de Envío {this.props.costoenvio==='G'?" Gratis a todo el país":("$"+this.props.costoenvio)}
                                        <br></br>
                                        Vendidos {this.props.cantidadvendida}
                                    </Card.Text>
                                
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </React.Fragment>
            
        );
    }

}
export default Tarjeta;