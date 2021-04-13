import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as authActions from '../../../store/actions/index';

// const signOut = (props) => {
// 	if (props?.user?.user?.email) {
// 		props.signOut();
// 	}
// }

const SignOut = (props) => {
	if (props?.user?.user?.email) {
		props.signOut();
	}
	return (
		<Redirect to="/"/>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.authReducer.user
	};
}
const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(authActions.signOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);