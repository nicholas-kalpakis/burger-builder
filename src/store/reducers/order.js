import * as actionTypes from '../actions/actionTypes';

const initialState = {
	orders: [],
	loading: false,
	error: false,
	purchaseSuccess: false,
	ordersLoading: false,
	ordersError: false
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PURCHASE_ORDER_SUCCESS : {
			return {
				...state,
				loading: false,
				orders: state.orders.concat(action.orders),
				purchaseSuccess: true
			}
		}
		case actionTypes.PURCHASE_ORDER_ERROR : {
			return {
				...state,
				loading: false,
				error: false
			}

		}
		case actionTypes.PURCHASE_ORDER_LOADING  : {
			return {
				...state,
				loading: true
			}
		}
		case actionTypes.INIT_PURCHASED: {
			return {
				...state,
				purchaseSuccess: false
			}
		}
		case actionTypes.FETCH_ORDERS_START: {
			return {
				...state,
				ordersLoading: true,
				ordersError: false
			}
		}
		case actionTypes.FETCH_ORDERS_SUCCESS: {
			return {
				...state,
				ordersLoading: false,
				orders: state.orders.concat(action.order)
			}
		}
		case actionTypes.FETCH_ORDERS_ERROR: {
			return {
				...state,
				ordersLoading: false,
				ordersError: true
			}
		}
		case actionTypes.FETCH_ORDERS_LOADING: {
			return  {
				...state,
				ordersLoading: true
			}
		}
		default: {
			return {
				...state
			}
		}
	}
};

export default reducer;
