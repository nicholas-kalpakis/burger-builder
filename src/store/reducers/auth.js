import * as acitonTypes from '../actions/actionTypes';

initialState = {

}

const reducuer = (state = initialState, action) => {

	switch(action) {
		case(acitonTypes.INIT_SIGN_UP):
			return {
				...state
			};
		default: {

		}
	}
}