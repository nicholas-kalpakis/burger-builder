import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/">Burger Builder</NavigationItem>	
		<NavigationItem link="/auth"> Sign In </NavigationItem>	
		<NavigationItem link="/orders">Orders</NavigationItem>	
	</ul>
);

export default navigationItems;