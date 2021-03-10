import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

	// Turns object into array
	let transformedIngredients = Object.keys(props.ingredients)
		.map((ingredientKey) => {
			return [...Array(props.ingredients[ingredientKey])].map((_,i) => {
				return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}></BurgerIngredient>
			})
		})
		.reduce((arr, cur) => {
			return arr.concat(cur);
		}, []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please add ingredients!</p>
	}
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top"/>
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom"/>
		</div>
	);
};

export default burger;
