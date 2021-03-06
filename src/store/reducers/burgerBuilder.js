import * as actionTypes from '../actions/actionTypes';

const initialState = {
	totalPrice: 4,
	ingredients: []
}

const INGREDIENT_PRICES = {
	salad: .5,
	cheese: .4,
	bacon: .3,
	meat: .7
}

const reducer = (state = initialState, action) => {

	switch(action.type) {
		case actionTypes.ADD_INGREDIENT: 
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] + 1
				},
				totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
			};
		case actionTypes.REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] - 1
				},
				totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
			};
		case actionTypes.SET_INGREDIENTS:
			return {
				...state,
				ingredients: action.ingredients,
				totalPrice: 4
			}
		case actionTypes.SET_INIT_INGREDIENTS_ERROR:
			return {
				...state,
				initIngredientsError: true
			}
		default:
			return state;
	}
};

export default reducer;