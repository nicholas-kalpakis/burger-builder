import React, {Component} from 'react'
import { firebaseApp } from '../../../firebase';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import classes from './SignUp.module.css';
import { connect } from 'react-redux';
class SignUp extends Component {

	state = {
		controls: {
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Email'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: '',
				validation: {
					required: true,
					minLength: 6
				},
				valid: false,
				touched: false
			}
		}
	}


	isInputValid = (formElementRules, value) => {
		if(formElementRules.required === true && value.trim() === '') {
			return false
		}
		return true
	}

	inputChangedHandler = (event, controlName) => {
		const updatedControls = {
			...this.state.controls,
			[controlName]: {
				...this.state.controls[controlName],
				value: event.target.value,
				valid: this.isInputValid(event.target.value, this.state.controls[controlName].validation),
				touched: true
			}
		}
		this.setState({controls: updatedControls})
	}

	signUpClickHandler = async (e) => {
		e.preventDefault();
		const email = this.state.controls.email.value
		const password = this.state.controls.password.value

		try {
			await firebaseApp.auth().createUserWithEmailAndPassword(email,password);
			this.props.history.push('/');
		} catch (err) {
			console.log(err)
		}
	}

	render () {
		const formElementsArray = [];
		for (let key in this.state.controls) {
			formElementsArray.push({
				id: key,
				config: this.state.controls[key]
			})
		}

		const form = formElementsArray.map((formElement) => (
			<Input key={formElement.id} valid={formElement.config.valid} inputtype={formElement.config.elementType} value={formElement.config.value} elementConfig={formElement.config.elementConfig} changed={(event) => {this.inputChangedHandler(event, formElement.id)}}></Input>
		))
		return (
			<div className={classes.SignUp}>
				<h1>Create New Account</h1>
				<form>
				 {form}
				 <Button clicked={this.signUpClickHandler}btnType="Success">Submit</Button>
				</form>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {

	};
}
const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);