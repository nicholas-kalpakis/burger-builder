import axios from '../../axios-orders';
import * as actionTypes from '../actions/actionTypes';

export const purchaseOrderSuccess = () => {
	return  {
		type: actionTypes.PURCHASE_ORDER_SUCCESS,
	}
}

export const purchaseOrderFailed = (error) => {
	return  {
		type: actionTypes.PURCHASE_ORDER_ERROR,
		error: error
	}

}

export const purchaseOrderLoading = () => {
	return {
		type: actionTypes.PURCHASE_ORDER_LOADING
	}
}

export const purchaseOrderStart = (order) => {
	return dispatch => {
		dispatch(purchaseOrderLoading());
		axios.post('/orders.json', order)
			.then(response => {
				dispatch(purchaseOrderSuccess(order));
			})
			.catch((error) => {
				dispatch(purchaseOrderFailed('failed to post purchase order'));
			})
	}
}

const fetchOrdersSuccess = (order) => {
	return {
		type: actionTypes.FETCH_ORDERS_SUCCESS,
		order: order
	}
}

const fetchOrdersError = (error) => {
	return {
		type: actionTypes.FETCH_ORDERS_ERROR
	}
}

// const fetchOrdersLoading = () => {
// 	return {
// 		type: actionTypes.FETCH_ORDERS_LOADING
// 	}
// }

export const fetchOrders = () => {
	return dispatch => {
		axios.get('/orders.json')
			.then(res => {
				let fetchedOrders = [];
				for (let key in res.data) {
					fetchedOrders.push({...res.data[key], id: key});
				}
				dispatch(fetchOrdersSuccess(fetchedOrders))			
			})
			.catch(err => {
				fetchOrdersError(err)
			})
	}
}