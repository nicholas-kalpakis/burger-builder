import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as orderActions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {

	state = {
		loading: true
	}

	componentWillMount () {
		this.props.initFetchOrders();
		
	}
	render () {

	
		return (
			<div>
				{this.props.ordersLoading ? <Spinner/> : null}
				{this.props.orders.map((order) => (
					<Order ingredients={order.ingredients} totalPrice={order.price}></Order>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		orders: state.orderReducer.orders,
		ordersLoading: state.orderReducer.ordersLoading,
		ordersError: state.orderReducer.ordersError
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		initFetchOrders: () => dispatch(orderActions.fetchOrders())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));