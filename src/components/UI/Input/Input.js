import React from 'react';
import classes from './Input.module.css';
const input = (props) => {
	let inputElement = null;
	switch (props.inputtype) {

		case ('input'):
			inputElement = <input className={[classes.InputElement, props.valid ? classes.Valid : classes.Invalid]} value={props.value} onChange={props.changed} placeholder={props.elementConfig.placeholder} {...props}/>
			break;
		case ('textarea'):
			inputElement = <textarea className={classes.InputElement} value={props.value} onChange={props.changed} placeholder={props.elementConfig.placeholder} {...props}/>
			break;
		case ('select'):
			inputElement = (
					<select className={classes.InputElement} onChange={props.changed} {...props} >
						{props.elementConfig.options.map((option) => (
							<option key={option} value={option.value}>
								{option.displayValue}
							</option>
						))}
					</select>
			)
			break;
		default:
			inputElement = <input className={classes.InputElement} {...props}/>
	}

	return (
		<div className={classes.Input}>
			<label className={classes.Label}>{props.elementConfig.label}</label>
			{inputElement}
		</div>
	)

};

export default input;