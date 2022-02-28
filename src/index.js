//tener la variable react en el scope
import React from 'react';
//tener la variable reactDOM en el scope
import ReactDOM from 'react-dom';
import App from './components/App.js';
import "./estilos.css"
import 'bootstrap/dist/css/bootstrap.min.css';

//renderizar la app en el DOM
ReactDOM.render(<App/>, document.getElementById(`root`));
