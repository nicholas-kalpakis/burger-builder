import * as actionTypes from '../actions/actionTypes';

const initialState = {
	user: null,
	redirectToHome: false
}

const auth = (state = initialState, action) => {
	switch(action.type) {
		case(actionTypes.SIGN_IN):
			return {
				...state,
				user: action.user
			}
		case(actionTypes.SIGN_OUT):
			return {
				...state,
				user: null,
				redirectToHome: false
			}
		case(actionTypes.INIT_REDIRECT_TO_HOME): {
			return {
				...state,
				redirectToHome: true
			}
		}
		default: {
			return {
				...state
			}
		}
	}
}

export default auth