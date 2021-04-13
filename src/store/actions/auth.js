import * as actionTypes from './actionTypes';
import { firebaseApp } from '../../firebase';

const setSignedInUser = (user) => {
	return {
		type: actionTypes.SIGN_IN,
		user: user
	}
}

const setUserSignedOut = () => {
	return {
		type: actionTypes.SIGN_OUT
	}
}

const initRedirectToHome = () => {
	return {
		type: actionTypes.INIT_REDIRECT_TO_HOME
	}
}

export const signIn = (email, password) => {
	return dispatch => {
		firebaseApp.auth().signInWithEmailAndPassword(email,password).then((user) => {
			dispatch(setSignedInUser(user))
			dispatch(initRedirectToHome())
		})
		.catch( err  => {
			console.log(err)
		});
	}
}

export const signOut = () => {
	return (dispatch) => {
		firebaseApp.auth().signOut().then(() => {
			dispatch(setUserSignedOut())
		}).catch((error) => {
			console.log('sign out error')
		})
	}
}

