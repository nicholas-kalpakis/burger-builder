import React, {Component} from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
class Checkout extends Component {

	checkoutCancleHandler = () => {
		this.props.history.goBack();
	}

	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}

	render () {
		if (this.props.purchaseSuccess) this.props.history.replace('/');
		return (
			<div>
				<CheckoutSummary 
					ingredients={this.props.ings}
					checkoutCanceled={this.checkoutCancleHandler}
					checkoutContinued={this.checkoutContinuedHandler}
				/>
				<Route
					path={this.props.match.path + '/contact-data'}
					component={ContactData}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		ings: state.burgerBuilderReducer.ingredients,
		purchaseSuccess: state.orderReducer.purchaseSuccess
	}
}

export default connect(mapStateToProps)(Checkout);