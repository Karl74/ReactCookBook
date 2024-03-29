import React from "react"
import IngredientList from "./IngredientList"
import Instructions from "./Instructions"



const Recipe = ({name, ingredients, steps})=>
	<section>
		<h1>{name}</h1>

		<IngredientList list={ingredients}/>
		
		<section>
			<Instructions steps={steps}/>
		</section>
	
	</section>


export default Recipe