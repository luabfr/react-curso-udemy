/* eslint no-eval: 0 */ 

// 1 - importacion de las librerias necesarias y a utilizar
import React, {useState} from "react" // importo la funcion "useState" que es parte de la libreria "React". Entonces, puedo importarla directamente desestructuralizada
import words from "lodash.words" // importo la funcion words, de la libreria lodash
import Functions from "./components/Functions"
import MathOperations from "./components/MathOperations"
import Numbers from "./components/Numbers"
import Result from "./components/Result"


import "./App.css" 		// Importo archivo CSS


// 2 - generacion de la funcion del componente
//la const un espacio en memoria que no se puede volver a asignar, pero NO es inmutable.
const App = ()=>{

	// useState tiene un VAR, + una FUNC que modifica esa VAR
	const [stack,setStack] = useState("") // indicamos el valor por defecto
	// useState =["elEstado", laFuncion]
	// la variable "stack" la usamos para acumular lo que vamos escribiendo	


	//words es una funcion de la libreria lodash
	// "items" solo se agrega para que la calculadora, en su display, solo muestre el ultimo numero que el usuario ingreso
	const items = words(stack, /[^-^+^*^/]+/g) 
	console.log("Renderizacion de App:", items);
	const value = items.length > 0 ? items[items.length - 1] : 0;

	return (
		<main className="react-calculator">
			<h1> Calc App</h1>
			<Result value={value} text="" />
			
			<Numbers onClickNumber={
				number => /*console.log("Number:", number)*/
					setStack(`${stack}${number}`) // se va concatenando lo que ingresamos
			}/>

			<Functions 
				onContentClear={() => {
					console.log("Content Clear:")
					setStack("")
				}}
				onDelete={() => {
					if (stack.length > 0){
						const newStack = stack.substring( 0 , stack.length-1 )
						console.log("On Delete: ",newStack)
						setStack(newStack)
					}
					
				}}
			/>

			<MathOperations 
				onClickOperations={	(operation) =>{ 
					console.log("Operation:",operation)
					setStack(`${stack}${operation}`)

				}} 
				onClickEqual={(equal) => {
					console.log("Equal")
					setStack( eval(stack).toString() ) // el metodo eval() ejecuta un string como si fuese codigo javascript. ej: si recibe un string "2+2", eval lo ejecuta como si fuese codigo js, y da como resultado "4".

				}}
			/>
			

		</main>
	)
}



// 3 - exportacion 
export default App