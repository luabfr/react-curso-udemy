import React from "react"
import PropTypes from "prop-types" // Esta libreria sirve para validar el "tipo de datos" de las "props" (string, number, boolean, etc)


// la desestructuralizacion, ya se hacen al recibir el parametro
const Result = ({ value } )=>(
	<div className="result">
		{value}
	</div>
)



// creamos un objeto (propTypes) del componete (Result)
// que es utilizado por la libreria para validar las props
Result.propTypes = {
	// con PropTypes.string: indico que se valide que el "prop" value sea siempre de tipo string
	// con .isRequired: indico que el valor tiene que estar, si o si.
	value: PropTypes.string.isRequired
}

// Establece valor por default para las props no recibidas.
Result.defaultProps = {
	value: "0"
}




export default Result