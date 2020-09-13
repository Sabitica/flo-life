import axios from 'axios';
import { GET_EMOTIONS, EMOTIONS_LOADING } from './types';

export const getEmotions = () => dispatch => {
	dispatch(setEmotionsLoading());
	axios
		.get('/api/emotions')
		.then(res => 
			dispatch({
				type: GET_EMOTIONS,
				payload: res.data
			}))
};

export const setEmotionsLoading = () => {
	return {
		type: EMOTIONS_LOADING
	};
};