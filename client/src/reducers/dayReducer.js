import { GET_DAYS, DAYS_LOADING, GET_DAY } from '../actions/types';

const initialState = {
	days: [],
	loading: false
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_DAYS: 
			return {
				...state,
				days: action.payload,
				loading: false
			}
		case DAYS_LOADING: 
			return {
				...state,
				loading: true
			}
		case GET_DAY: 
			return {
				...state,
				day: action.payload,
				loading: false
			}		
		default: 
			return state;
	}
}