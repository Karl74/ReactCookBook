

const Instructions = ({steps})=>
	<div>
		<h1>Cooking Instructions</h1>
		<div>
			{steps.map((step, i)=>
				<p key={i}>{step}</p>)
			}
		</div>
	</div>

export default Instructions