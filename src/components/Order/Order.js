import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
	const ingredientsArray = [];
	for (let ingredient in props.ingredients) {
		ingredientsArray.push({
			ingredientName: ingredient,
			ingredientAmount: props.ingredients[ingredient]
		});
	}

	return (
		<div className={classes.Order}>
			Ingredients:
			{ingredientsArray.map((ingredient) => {
				return <aux><span></span><span style={{
					textTransform: 'capitalize',
					display: 'inline-block',
					margin: '0 8px',
					border: '1px solid',
					padding: '6px'
				}}>{ingredient.ingredientName} ({(ingredient.ingredientAmount)})</span></aux>;
			})}

			<p>Price: <strong>{props.totalPrice}</strong></p>
		</div>
	)
}

export default order;