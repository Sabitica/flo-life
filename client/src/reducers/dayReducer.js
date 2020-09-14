import { GET_DAYS, DAYS_LOADING, GET_DAY, GET_DAYS_BY_DATE } from '../actions/types';

const initialState = {
	days: [],
	currentDay: {},
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
		case GET_DAYS_BY_DATE: 
			console.log(action.payload[0]);
			return {
				...state,
				currentDay: action.payload[0],
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