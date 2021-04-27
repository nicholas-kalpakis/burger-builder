import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import * as orderActions from '../../../store/actions/index';
class ContactData extends Component {
	
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Name',
					label: 'Name'
				},
				valid: true,
				validation: {
					required: true
				},
				value: ''
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street',
					label: 'Street'
				},
				valid: true,
				validation: {
					required: true
				},
				value: ''
			},
			zipCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ZIP',
					label: 'Zip Code'
				},
				valid: true,
				validation: {
					required: true
				},
				value: ''
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Country',
					label: 'Country'
				},
				valid: true,
				validation: {
					required: true
				},
				value: ''
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Your Email',
					label: 'Email'
				},
				valid: true,
				validation: {
					required: true
				},
				value: ''
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{value: 'fastest', displayValue: 'Fastest'},
						{value: 'cheapest', displayValue: 'Cheapest'}
					],
					label: 'Delivery Method'
				},
				value: 'cheapest'
			},
		},
		loading: false,
		valid: true
	}

	orderHandler = (event) => {
		this.setState({loading: true});
		//prevent default form functionality
		event.preventDefault();

		const orderForm = {}
		for (let formElement in this.state.orderForm){
			orderForm[formElement] = this.state.orderForm[formElement].value;
		}
		const order = {
			ingredients: this.props.ings,
			price: this.props.totalPrice,
			orderForm: orderForm
		}
		this.props.purchaseOrderStart(order);
	}

	isInputValid = (formElementRules, value) => {
		if(formElementRules.required === true && value.trim() === '') {
			return false
		}
		return true
	}


	inputChangedHandler = (event, formIdentifier) => {
		const updatedOrderForm = {...this.state.orderForm};
		const updatedFormElement = {...updatedOrderForm[formIdentifier]};
		// const updatedFormElementValidation = {...updatedOrderForm.validation};

		updatedFormElement.value = event.target.value;
		const valid = this.isInputValid(updatedFormElement.validation, updatedFormElement.value);
		updatedFormElement.valid = valid;
		updatedOrderForm[formIdentifier] = updatedFormElement;


		this.setState({orderForm: updatedOrderForm, valid: valid})
	};

	render () {
		const inputs = []
		for (let input in this.state.orderForm) {
			const value = this.state.orderForm[input];
			inputs.push(<Input key={input} valid={value.valid} inputtype={value.elementType} value={value.value} changed={(event) => {this.inputChangedHandler(event, input)}} elementConfig={value.elementConfig}></Input>)
		}

		return (
			<div className={classes.ContactData}>
				<h4>Enter your Contact Data</h4>
				<p>{this.state.orderForm.valid}</p>
				{
					this.props.loading ? <Spinner/> : 
					<form onSubmit={this.orderHandler}>
						{inputs}
						<Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
					</form>
					
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		ings: state.burgerBuilderReducer.ingredients,
		totalPrice: state.burgerBuilderReducer.totalPrice,
		loading: state.burgerBuilderReducer.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		purchaseOrderStart: (order) => dispatch(orderActions.purchaseOrderStart(order))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));