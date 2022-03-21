import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Tarjeta extends Component {

    render() {
        return (
            <React.Fragment>
                <Card style={{ width: '18rem' }} className="margenesTarjeta">
                    <Card.Img
                        variant="top" className="maxAltoImg"
                        src={
                            require(`../assets/images/${this.props.imagen}`) 
                        }
                    />
                    <Card.Body>
                        <Card.Body>
                            <Card.Title>
                                {this.props.nombre} {/**con el objeto props recupero lo que 
                                 * le pasé desde el home. Los props son propiedades que los componentes padres pasan a los hijos */}
                            </Card.Title>
                            <Card.Text>{this.props.descripcion}</Card.Text>
                        </Card.Body>
                    </Card.Body>

                </Card>
            </React.Fragment>

        );
    }

}
export default Tarjeta;