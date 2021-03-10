import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
	salad: .5,
	cheese: .4,
	bacon: .3,
	meat: .7
}

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4,
		purchasable: false,
		purchasing: false
	}

	updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map((igKey) => {
				return ingredients[igKey]
			})
			.reduce((sum,el) => {
				return sum + el
			}, 0)
		this.setState({purchasable: sum > 0});
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;

		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		})
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHanlder = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount - 1;

		if(updatedCount > -1){
			const updatedIngredients = {...this.state.ingredients};
			updatedIngredients[type] = updatedCount;

			const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
			this.setState({
				ingredients: updatedIngredients,
				totalPrice: newPrice
			});
			this.updatePurchaseState(updatedIngredients);
		}
	};

	purchaseHanlder = () => {
		this.setState({purchasing: true})
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing: false});
	}

	purchaseContinueHandler = () => {

	};

	
	render() {
		const disabledInfo = {
			...this.state.ingredients
		}

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<Aux>
				<Modal 
					purchaseCancelHandler={this.purchaseCancelHandler}
					show={this.state.purchasing}>
					<OrderSummary price={this.state.totalPrice} purchaseCanceled={this.purchaseCancelHandler} purchaseContinue={this.purchaseContinueHandler} ingredients={this.state.ingredients}></OrderSummary>
				</Modal>
				<Burger ingredients={this.state.ingredients}></Burger>
				<BuildControls 
					ingredientRemoved={this.removeIngredientHanlder} 
					ingredientAdded={this.addIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					ordered={this.purchaseHanlder}
					purchasable={this.state.purchasable}
				>
				</BuildControls>
			</Aux>
		);
	}
}

export default BurgerBuilder;