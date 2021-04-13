import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/">Burger Builder</NavigationItem>	
		{props.user?.user?.email ? <NavigationItem link="/signOut"> Sign Out </NavigationItem> : <NavigationItem link="/auth"> Sign In </NavigationItem>}
		{props.user?.user?.email ? <NavigationItem link="/orders">Orders</NavigationItem> : null }
	</ul>
);

export default navigationItems;