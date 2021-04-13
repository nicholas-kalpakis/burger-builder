import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
	const user = props.user?.user?.email ? <div className={classes.Username}>user: {props.user?.user?.email}</div> : null
	return (
		<header className={classes.Toolbar}>
			<DrawerToggle toggleSideNav={props.toggleSideNav}></DrawerToggle>
			<div className={classes.Logo}>
				<Logo/>
			</div>
			{user}
			<nav className={classes.DesktopOnly}>
				<NavigationItems user={props.user}></NavigationItems>
			</nav>
		</header>
	)
}

export default toolbar;