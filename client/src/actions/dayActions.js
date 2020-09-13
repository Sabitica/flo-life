import axios from 'axios';
import { GET_DAYS, DAYS_LOADING, GET_DAY, ADD_DAY, UPDATE_DAY } from './types';

export const getDays = () => dispatch => {
	dispatch(setDaysLoading());
	axios
		.get('/api/days')
		.then(res => 
			dispatch({
				type: GET_DAYS,
				payload: res.data
			}))
};

export const addDay = (day) => dispatch => {
	axios.post('/api/days', day)
			.then(res => 
				dispatch({
					type: ADD_DAY, 
					payload: res.data
				}))
}

export const updateDay = (id) => dispatch => {
	axios
		.post(`/api/days/update/${id}}`)
		.then(res => 
				dispatch({
					type: UPDATE_DAY,
					payload: res.data
				}))
} 

export const getDay = (id) => dispatch => {
	axios
		.get(`/api/days/${id}`)
		.then(res => 
			dispatch({
				type: GET_DAY,
				payload: res.data
			}))
};

export const setDaysLoading = () => {
	return {
		type: DAYS_LOADING
	};
};