import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const initPurchased = () => {
	return {
		type: actionTypes.INIT_PURCHASED
	}
}
export const addIngredient = (name) => {

	return {
		ingredientName: name,
		type: actionTypes.ADD_INGREDIENT,
		initIngredientsError: false
	}
}

export const removeIngredient = (name) => {
	return {
		ingredientName: name,
		type: actionTypes.REMOVE_INGREDIENT
	}
}

const setIngredients = (ingredients) => {
	return {
		ingredients: ingredients,
		type: actionTypes.SET_INGREDIENTS,
	}
}

const setInitIngredientsError = () => {
	return {
		type:actionTypes.SET_INIT_INGREDIENTS_ERROR
	}
}
export const initIngredients = () => {
	return dispatch => {
		axios.get('/ingredients.json')
		.then(response => {
			if(response) {
				dispatch(setIngredients(response.data));
			}
		})
		.catch(error => { 
			dispatch(setInitIngredientsError())
		});
	}
}