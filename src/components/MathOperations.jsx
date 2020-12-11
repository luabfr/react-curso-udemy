import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"

const MathOperations = ({ onClickOperations,onClickEqual} )=>(
	<section className="math-operations">
		<Button text="+" clickHandler={onClickOperations}></Button>
		<Button text="-" clickHandler={onClickOperations}></Button>
		<Button text="*" clickHandler={onClickOperations}></Button>
		<Button text="/" clickHandler={onClickOperations}></Button>
		<Button text="=" clickHandler={onClickEqual}></Button>
	</section>
)



MathOperations.propTypes = {
	onClickOperations: PropTypes.func.isRequired,
	onCLickEqual: PropTypes.func.isRequired
}




export default MathOperations