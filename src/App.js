import { Component } from 'react';
import Layout from './containers/BurgerBuilder/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BugerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import { AuthProvider } from "./hoc/Auth"
class App extends Component {
  render () {
	  return(	
		<div>
			<AuthProvider>
				<Layout>
					<Switch>
						<Route path="/checkout" component={Checkout}/>
						<Route path="/orders" component={Orders}/>
						<Route path="/auth" component={Auth}/>
						<Route path="/" exact component={BurgerBuilder} />
					</Switch>
				</Layout>
			</AuthProvider>
		</div>
	  )
  };
}

export default App;
