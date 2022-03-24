import React, { Component } from 'react';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom' //permite crear rutas, vinculos entre las paginas
//import Cliente from './components/Instrumento';
import DetalleInstrumento from './components/DetalleInstrumento';
import Productos from './components/Productos';
class App extends Component {


  render() {
    return (
      /*<Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home />} />
      </Routes>
*/
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/home" component={Home} ></Route>
        <Route exact path="/Productos" component={Productos} ></Route>
        <Route exact path="/DetalleInstrumento/:id" component={DetalleInstrumento} ></Route>
      </Switch>
    )
  }
}

export default App;
