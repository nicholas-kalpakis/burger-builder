import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import burgerBuilderReducer from './store/reducers/burgerBuilder'
import orderReducer from './store/reducers/order';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseReducer, getFirebase, ReactReduxFireBaseProvider } from 'react-redux-firebase';

const fbConfig = {
	apiKey: "AIzaSyDFBgRyT_iL0dvCIrAJI7poXpcFHZy0BLc",
	authDomain: "react-my-burger-2ab33.firebaseapp.com",
	databaseURL: "https://react-my-burger-2ab33-default-rtdb.firebaseio.com",
	projectId: "react-my-burger-2ab33",
	storageBucket: "react-my-burger-2ab33.appspot.com",
	messagingSenderId: "336950971083",
	appId: "1:336950971083:web:01e7a5564ad24a0224294e",
	measurementId: "G-831VFGERWQ"
};

const rrfConfig = {
	userProfile: 'users'
}


const rootReducer = combineReducers({
	burgerBuilderReducer: burgerBuilderReducer,
	orderReducer: orderReducer,
	firebase: firebaseReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunk)
));

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch
}

const app = (
	<Provider store={store}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));
