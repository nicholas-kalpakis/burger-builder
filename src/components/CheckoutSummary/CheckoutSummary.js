import React from 'react';
import Button from '../UI/Button/Button';
import Burger from '../Burger/Burger';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
	return (
		<div className={classes.CheckoutSummary}>
			<h1>We hope it tastes well</h1>
			<div> 
				<Burger ingredients={props.ingredients}/>
			</div>
			
			<Button clicked={props.checkoutCanceled} btnType="Danger">Cancel</Button>
			<Button clicked={props.checkoutContinued} btnType="Success">Continue</Button>
		</div>
	)
}

export default checkoutSummary;