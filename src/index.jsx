import React from "react"
import ReactDOM from "react-dom"
// import NombreDeLibreria from "ubicacion"
// Si la libreria que se desea importar ya está referenciada en el package.json, no hace falta declarar el path exacto (ej "./src/mi-libreria")

//importar componente
import App from "./App"

//el metodo render() de reactDOM: 
ReactDOM.render( 
	<App></App>,  		// en el primer parametro espera nuestra aplicacion/el contenido de nuestra aplicacion
	document.getElementById("root")		// en el segundo parametro: espera el punto de montaje, donde se ubica en el HTML.
)
