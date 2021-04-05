import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux'

const withErrorHandler = (WrappedComponent, axios) => {


	return class extends Component {

		state = {
			error: null
		};

		
		componentWillMount() {
			this.resInterceptor = axios.interceptors.response.use(response => response, error => {
				this.setState({error:error})
				throw new Error(error);
			});

			this.reqInterceptor = axios.interceptors.request.use(req => {
				this.setState({error:null})
				return req;
			});
		};

		componentWillUnmount() {
			axios.interceptors.response.eject(this.resInterceptor);
			axios.interceptors.request.eject(this.reqInterceptor);
		};

		errorConfirmedHandler = () => {
			this.setState({error: null})
		};

		render () {
			return (
				<Aux>
					<Modal show={this.state.error} modalClosed={this.errorConfirmedHandler} >
						{this.state.error ? this.state.error.message : null}
					</Modal>
					<WrappedComponent {...this.props}/>
				</Aux>
			)
		}
	}
}

export default withErrorHandler;