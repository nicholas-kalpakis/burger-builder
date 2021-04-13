import { Component } from 'react';
import Layout from './containers/BurgerBuilder/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BugerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import SignOut from './containers/Auth/SignOut/SignOut';
import { AuthProvider } from "./hoc/Auth"
import { connect } from 'react-redux';
class App extends Component {

	render () {
		
		return(	
			<div>
				<AuthProvider>
					<Layout user={this.props.user}>
						<Switch>
							<Route path="/checkout" component={Checkout}/>
							<Route path="/orders" component={Orders}/>
							<Route path="/auth" component={Auth}/>
							<Route path="/signOut" component={SignOut}/>
							<Route path="/" exact component={BurgerBuilder} />
						</Switch>
					</Layout>
				</AuthProvider>
			</div>
		)
	};
}

const mapStateToProps = (state) => {
	return {
		user: state.authReducer.user
	};
}
const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);