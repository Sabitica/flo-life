import { GET_EMOTIONS, EMOTIONS_LOADING } from '../actions/types';

const initialState = {
	emotions: [],
	loading: false
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_EMOTIONS: 
			return {
				...state,
				emotions: action.payload,
				loading: false
			}
		case EMOTIONS_LOADING: 
			return {
				...state,
				loading: true
			}		
		default: 
			return state;
	}
}