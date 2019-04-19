import Ingredients from "./Ingredients"

const IngredientList = ({list})=>
   <ul>
	{list.map((ingredient, i)=>
		< Ingredients key={i} {...ingredient} />
		)}
	</ul>

export default IngredientList