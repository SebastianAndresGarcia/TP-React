import React, { Component } from "react";


class DetalleInstrumento extends Component{
    render(){
        const parametroId = this.props.match.params.id;
        console.log("recupero id de instrumento "+parametroId);
        return(
            
            <React.Fragment>
                detalle instrumento
            </React.Fragment>
        );
    }
}
export default DetalleInstrumento;
