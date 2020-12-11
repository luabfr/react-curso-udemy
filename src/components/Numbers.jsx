import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = onClickNumber =>{
	

	const renderButton = number =>(
		<Button 
			clickHandler={onClickNumber} 
			key={number}
			text={number.toString()} 
		/>

	)
	//con .map() Creo un nuevo Array, partiendo del array numbers[]. 
	//Ahora cada item del array, es un <Button/>
	return numbers.map(renderButton)
	
}

const Numbers = ({onClickNumber})=>(
	
	<section className="numbers">
		{
			renderButtons(onClickNumber) //llamo a una funcion q dibuja N botones
		}		
	</section>
)

Numbers.propTypes = {
	onClickNumber: PropTypes.func.isRequired
}


export default Numbers