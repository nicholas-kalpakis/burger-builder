import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux'
const sideDrawer = (props) => {

	let attachedClasses = [classes.SideDrawer, classes.Closed];
	if (props.isOpen) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}
	return (
		<Aux>
			<Backdrop show={props.isOpen} clicked={props.close}/>
			<div className={attachedClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo/>
				</div>
				
				<nav>
					<NavigationItems/>
				</nav>
			</div>
		</Aux>
	);
}

export default sideDrawer;