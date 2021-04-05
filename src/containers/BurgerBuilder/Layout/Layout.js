import React, {Component} from 'react'
import Aux from '../../../hoc/Aux'
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	}
	
	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false})
	}

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer}
		});
	}

	render () {

		return (
			<Aux>
				<Toolbar toggleSideNav={this.sideDrawerToggleHandler}/>
				<SideDrawer isOpen={this.state.showSideDrawer}  close={this.sideDrawerClosedHandler}/>
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		)
	}


}

export default Layout;