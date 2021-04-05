import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import axios from '../../axios-orders';

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';

class BurgerBuilder extends Component {

	state = {
		purchasable: true,
		purchasing: false
	}

	componentDidMount() {
		this.props.initIngredients();
		this.props.initPurchased();
	}

	updatePurchaseState = () => {
		const sum = Object.keys(this.props.ings)
			.map((igKey) => {
				return this.props.ings[igKey]
			})
			.reduce((sum,el) => {
				return sum + el
			}, 0)
		return sum > 0;
	}

	purchaseHanlder = () => {
		this.setState({purchasing: true})
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing: false});
	}

	purchaseContinueHandler = () => {
		this.setState({loading: true})
		this.props.history.push('/checkout');
	};

	
	render() {
		const disabledInfo = {
			...this.props.ings
		}

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		const orderSummary = 
			<OrderSummary 
				price={this.props.totalPrice} 
				purchaseCanceled={this.purchaseCancelHandler} 
				purchaseContinue={this.purchaseContinueHandler} 
				ingredients={this.props.ings}>
			</OrderSummary>

		// BUGER
		let burger = this.props.initIngredientsError ? <p>Cant be loaded</p> : <Spinner/>
		if (this.props.ings) {
			burger = 
			<Aux>
					<Burger ingredients={this.props.ings}></Burger>
					<BuildControls 
						ingredientRemoved={this.props.onIngredientRemoved} 
						ingredientAdded={this.props.onIngredientAdded}
						disabled={disabledInfo}
						price={this.props.totalPrice}
						ordered={this.purchaseHanlder}
						purchasable={this.updatePurchaseState()}
					>
					</BuildControls>
			</Aux>
		}
		
		return (
			<Aux>
				<Modal 
					modalClosed={this.purchaseCancelHandler}
					show={this.state.purchasing}>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ings: state.burgerBuilderReducer.ingredients,
		totalPrice: state.burgerBuilderReducer.totalPrice,
		initIngredientsError: state.burgerBuilderReducer.initIngredientsError
	};
}
const mapDispatchToProps = (dispatch) => {
	return {
		onIngredientAdded: (ingName) =>  dispatch(burgerBuilderActions.addIngredient(ingName)),
		onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
		initIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
		initPurchased: () => dispatch(burgerBuilderActions.initPurchased())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));