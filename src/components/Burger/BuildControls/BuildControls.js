import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css'

const controls = [
	{label: 'Salad', type: 'salad'},
	{label: 'Bacon', type: 'bacon'},
	{label: 'Cheese', type: 'cheese'},
	{label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
	<div className={classes.BuildControls}>
		<p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
		{controls.map(ctrl =>(  
			 <BuildControl
				disabled={props.disabled[ctrl.type]} 
				type={ctrl.type} 
				removed={() => {props.ingredientRemoved(ctrl.type)}} 
				added={() => {props.ingredientAdded(ctrl.type)}} 
				label={ctrl.label}
				key={ctrl.label}
			/>
		))}
		<button onClick={props.ordered} className={classes.OrderButton} disabled={!props.purchasable} >ORDER NOW</button>
	</div>
);

export default buildControls;